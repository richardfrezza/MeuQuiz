var mongoose = require('mongoose');
var usuariosModel = mongoose.model('usuarios');
var parseParams = require('../utils/parse-params');

module.exports = function(app) {
  app.get('/api/usuarios', function(req, resp) {
    usuariosModel.find(parseParams(req.query.filter), [], {sort: {nome: 1}})
      .then(function(dados){
        resp.json(dados);
      }, function(erro) {
        resp.status(500).json(erro);
      })
  });
  app.post('/api/usuarios', function(req, resp) {
    usuariosModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/usuarios/:id', function(req, resp) {
    usuariosModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/usuarios/:id', function(req, resp) {
    usuariosModel.remove({_id: req.params.id})
      .then(function() {
        resp.sendStatus(204);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/usuarios/:id', function(req, resp) {
    usuariosModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
}

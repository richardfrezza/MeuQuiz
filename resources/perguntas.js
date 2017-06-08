var mongoose = require('mongoose');
var pedidoModel = mongoose.model('perguntas');
var parseParams = require('../utils/parse-params');

module.exports = function(app) {
  app.get('/api/perguntas', function(req, resp) {
    pedidoModel.find(parseParams(req.query.filter), [], {sort: {criacao: 1}})
      .populate('questionario', 'descricao')
      .then(function(dados){
        resp.json(dados);
      }, function(erro) {
        resp.status(500).json(erro);
      })
  });
  app.post('/api/perguntas', function(req, resp) {
    pedidoModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/perguntas/:id', function(req, resp) {
    pedidoModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/perguntas/:id', function(req, resp) {
    pedidoModel.remove({_id: req.params.id})
      .then(function() {
        resp.sendStatus(204);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/perguntas/:id', function(req, resp) {
    pedidoModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
}

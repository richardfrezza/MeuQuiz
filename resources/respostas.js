var mongoose = require('mongoose');
var respostaModel = mongoose.model('respostas');
var parseParams = require('../utils/parse-params');

module.exports = function(app) {
  app.get('/api/respostas', function(req, resp) {
    respostaModel.find(parseParams(req.query.filter), [], {sort: {usario: 1, }})
      .populate('usuario', 'nome documento')
      .populate('questionario','titulo')
      .then(function(dados){
        resp.json(dados);
      }, function(erro) {
        resp.status(500).json(erro);
      })
  });
  app.post('/api/respostas', function(req, resp) {
    respostaModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/respostas/:id', function(req, resp) {
    respostaModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/respostas/:id', function(req, resp) {
    respostaModel.remove({_id: req.params.id})
      .then(function() {
        resp.sendStatus(204);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/respostas/:id', function(req, resp) {
    respostaModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
}

var mongoose = require('mongoose');
var perguntaModel = mongoose.model('perguntas');
var parseParams = require('../utils/parse-params');

module.exports = function(app) {
  app.get('/api/perguntas', function(req, resp) {
    perguntaModel.find(parseParams(req.query.filter), [], {sort: {criacao: 1}})
      .populate('questionario', 'titulo')
      .then(function(dados){
        resp.json(dados);
      }, function(erro) {
        resp.status(500).json(erro);
      })
  });
  app.post('/api/perguntas', function(req, resp) {
    perguntaModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/perguntas/:id', function(req, resp) {
    perguntaModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/perguntas/:id', function(req, resp) {
    perguntaModel.remove({_id: req.params.id})
      .then(function() {
        resp.sendStatus(204);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/perguntas/:id', function(req, resp) {
    perguntaModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/:questionario/perguntas/:id', function(req, resp) {
    perguntaModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/:questionario/perguntas', function(req, resp) {
    perguntaModel.find(JSON.parse(req.query.filter), [], {sort: {pontuacao: -1}})
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
}

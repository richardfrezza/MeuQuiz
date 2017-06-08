var mongoose = require('mongoose');
var questionarioModel = mongoose.model('questionarios');
var parseParams = require('../utils/parse-params');

module.exports = function(app) {
  app.get('/api/questionarios', function(req, resp) {
    questionarioModel.find(parseParams(req.query.filter), [], {sort: {titulo: 1}})
      .then(function(dados){
        resp.json(dados);
      }, function(erro) {
        resp.status(500).json(erro);
      })
  });
  app.post('/api/questionarios', function(req, resp) {
    questionarioModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/questionarios/:id', function(req, resp) {
    questionarioModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/questionarios/:id', function(req, resp) {
    questionarioModel.remove({_id: req.params.id})
      .then(function() {
        resp.sendStatus(204);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/questionarios/:id', function(req, resp) {
    questionarioModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
}

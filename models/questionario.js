var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  titulo: String,
  descricao: String,
  emissao: String
});

mongoose.model('questionarios', _model);

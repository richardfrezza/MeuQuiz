var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  emissao: String
});

mongoose.model('questionarios', _model);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  nome: { type: String, required: true },
  documento: { type: String, required: true },
  email: String
});

mongoose.model('usuarios', _model);
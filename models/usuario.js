var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  nome: String,
  documento: String,
  email: String
});

mongoose.model('usuarios', _model);
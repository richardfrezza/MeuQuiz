var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  titulo: String,
    criacao: {
    type: Date,
    default: Date.now
  },
  peso: Number,
  opcoes: [{
    descricao: String,
    peso: Number,
  }],
   questionario: {
    type: Schema.Types.ObjectId,
    ref: 'questionarios'
  }
});

mongoose.model('perguntas', _model);
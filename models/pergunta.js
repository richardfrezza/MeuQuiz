var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  titulo: {type: String, required: true },
    criacao: {
    type: Date,
    default: Date.now
  },
  peso: { type: Number, required: true },
  opcoes: [{
    descricao: { type: String, required: true },
    peso: { type: Number, required: true },
  }],
   questionario: {
    type: Schema.Types.ObjectId,
    ref: 'questionarios'
  }
});

mongoose.model('perguntas', _model);
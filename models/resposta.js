var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios'
  },
  questionario: {
    type: Schema.Types.ObjectId,
    ref: 'questionarios'
  },
  realizacao: {
    type: Date,
    default: Date.now
  },
  respostas:[{
    pergunta: {
        _id: String,
        titulo: String,
        peso: Number,
    },
    opcao: {
        _id: String,
        descricao: String,
        peso: Number
    }
  }],
  pontuacao: Number
});

mongoose.model('respostas', _model);

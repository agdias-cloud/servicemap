const mongoose = require('mongoose');
const {model, Schema} = mongoose;
const RecursoSchema = new Schema({
    nome: {
        type: String,
        unique: true
    },
    descricao: String,
    tipo: String,
    tags: [{type: Map, of: String}]
})

module.exports = model('Recurso', RecursoSchema);

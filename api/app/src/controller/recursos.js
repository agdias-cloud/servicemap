const Recurso = require('../model/Recurso');
const ErrorResponse = require('../utils/errorResponse');

exports.criaRecurso = async (req, res, next) => {
    try {
      
        const recursoJaExiste = await Recurso.findOne({ nome: req.body.nome});
       
        if (recursoJaExiste) {
            console.log(req.body.nome);
            return next(new ErrorResponse(`Tentativa de adicionar recurso já existente`, 500))
        }
       const recurso = await Recurso.create(req.body);
       res.status(201).send(recurso)
    } catch (erro) {
        next(new ErrorResponse(erro, 500));
    }
}

exports.buscaRecursoPorId = async (req, res,next) => {
    try {
        
        const recurso = await Recurso.findById(req.params.id)
        console.log(recurso)
        res.status(200).send(recurso);    
    } catch (erro) {
        next(new ErrorResponse(erro, 404));
        
    }
    
}

exports.buscaRecursoPorNome = async (req, res,next) => {

    try {
        const recursos = await Recurso.find({"nome": {$regex: req.params.nome, $options: 'i'}});
        res.status(200).send(recursos)
    } catch (erro) {
        next(new ErrorResponse(`Não foi encontrado nenhum recurso com o nome ${req.params.nome}`))  
    }
    
}


exports.listaRecursos = async (req, res, next) => {
    try {
        const recursos = await Recurso.find();
        res.status(200).send(recursos);
    } catch (error) {
        
    }
}


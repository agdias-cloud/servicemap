const express = require('express');
const router = express.Router();
const { criaRecurso, listaRecursos, buscaRecursoPorNome, buscaRecursoPorId } = require('../controller/recursos')

router.
  route('/')
    .post(criaRecurso)
    .get(listaRecursos)
  
router.route('/nome/:nome')
  .get(buscaRecursoPorNome)

router.route('/id/:id')
  .get(buscaRecursoPorId);

module.exports = router;

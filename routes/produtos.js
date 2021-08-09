var express = require('express');
const { route } = require('.');
var router = express.Router();
const ProdutosControllers = require('../controllers/ProdutosController');

router.get('/criar', ProdutosControllers.viewForm);
router.post('/criar', ProdutosControllers.salvarForm);
router.get('/sucesso', ProdutosControllers.sucesso);
router.get('/:id/editar', ProdutosControllers.viewAttForm);
router.put('/editar', ProdutosControllers.editar);


module.exports = router;
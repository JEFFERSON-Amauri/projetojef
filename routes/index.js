var express = require('express');
var router = express.Router();
const produtosControllers = require('../controllers/produtosController');
const indexControllers = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jefferson' });
});

router.get('/produtos', produtosControllers.index);
router.get('/contato', indexControllers.viewContato);
router.get('/confirmarcontato', indexControllers.confirmarcontato);

module.exports = router;

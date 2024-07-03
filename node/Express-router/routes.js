const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const testesController = require('./controllers/testesController');
const contatoController = require('./controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas do teste
route.get('/testes/:idUser?', testesController.parametros);


// Rotas de contato
route.get('/contato', contatoController.inicioContato);

module.exports = route;
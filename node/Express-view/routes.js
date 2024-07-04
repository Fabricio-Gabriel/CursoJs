const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const testesController = require('./src/controllers/testesController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas do teste
route.get('/testes/:idUser?', testesController.parametros);


// Rotas de contato
route.get('/contato', contatoController.inicioContato);

module.exports = route;
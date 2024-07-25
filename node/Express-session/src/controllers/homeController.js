const HomeModel = require('../models/homeModel.js');

HomeModel.create({
    title: 'Outro titulo',
    description: 'Uma descrição de testes'
})
    .then(dados => console.log(dados))
    .catch(error => console.log(error));

HomeModel.find()
    .then(response => console.log(response))
    .catch(error => console.log(error));

exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Fabricio', logado: true }
    console.log(req.flash('arroz'));
    res.render('index');
    return;
};

// exports.proxima = (req, res) => {
//     console.log();
//     console.log('Ainda estou aqui');
//     console.log();
//     console.log(`Olha o que tem na req.session.nome ${req.session.nome}`);
// };

exports.trataPost = (req, res) => {
    
    res.send(`Olá ${req.body.cliente}, obrigado por se cadastrar`);

};
exports.paginaInicial = (req, res) => {
    res.render('index');
};


exports.trataPost = (req, res) => {
    res.send(`Olá ${req.body.nome}, obrigado por enviar o forms`);
};
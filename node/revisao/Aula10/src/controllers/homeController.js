exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send(`<h1>Olá ${req.body.nome} ${req.body.sobrenome}</h1>`);
}
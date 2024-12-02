exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(`<h1>Olá ${req.body.cliente}</h1>`);
};

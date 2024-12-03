exports.paginaInicial = (req, res) => {
    console.log(req.flash('nome'), req.flash('sobrenome'));
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(`<h1>Olá ${req.body.cliente}</h1>`);
};

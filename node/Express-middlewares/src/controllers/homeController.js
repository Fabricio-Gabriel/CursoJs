exports.paginaInicial = (req, res) => {
    console.log('Respondendo ao cliente');
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
    res.send(`Olá ${req.body.cliente}, obrigado por enviar o forms`);
};
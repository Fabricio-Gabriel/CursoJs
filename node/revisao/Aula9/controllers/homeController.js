exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome cliente: <input type="text" name="nome"><br>
            sobrenome cliente: <input type="text" name="sobrenome">
            <button>Enviar forms</button>
        </form>
        `);
}

exports.trataPost = (req, res) => {
    res.send(`<h1>Olá ${req.body.nome} ${req.body.sobrenome}</h1>`);
}
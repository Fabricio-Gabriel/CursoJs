const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome cliente: <input type="text" name="nome"><br>
        sobrenome cliente: <input type="text" name="sobrenome">
        <button>Enviar forms</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`<h1>Seja muito bem-vindo ${req.body.nome} ${req.body.sobrenome}<h1>`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server executando na porta 3000');
});

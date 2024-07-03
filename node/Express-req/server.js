const express = require('express');
const app = express();

app.use(express.urlencoded({ 
    extended: true
}));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUser?/:parametro?', (req, res) => {
    console.log(req.params);
    res.send(req.query);
    res.send(req.params.parametro);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Olá ${req.body.nome} obrigado por enviar o forms`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});
// app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.query.nome);
// });

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send(`<h1>Seja muito bem-vindo ${req.body.nome} ${req.body.sobrenome}<h1>`);
// });
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');
const { middlewareGlobal } = require('./src/middlewares/mid');


//utilização de metodo post e req.body
app.use(express.urlencoded({
    extended: true
}));

//utilização de componentes estaticos na aplicação
app.use(express.static(path.resolve(__dirname, 'public')));

//utilização de view, compilação de views pelo node e escolha da engine
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Middleware global
app.use(middlewareGlobal);

//utilização de todas as rotas no route feitas pelos controles
app.use(routes);


//acesso a uma porta de entrada do servidor
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server executando na porta 3000');
});

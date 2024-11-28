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


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server executando na porta 3000');
});

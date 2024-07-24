require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
       app.emit('Conexão estabelecida!');
    })
    .catch(error => console.log(error));

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/mid');


app.use(express.urlencoded({ 
    extended: true
}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(meuMiddleware);
app.use(routes);

app.on('Conexão estabelecida!', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});

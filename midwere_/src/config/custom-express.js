const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}))

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;
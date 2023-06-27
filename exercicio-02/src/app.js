const express = require('express');
const app = express();
const produtoRoutes = require('./route/produtoRoutes');

app.use(express.json());

app.use('/produto', produtoRoutes);

module.exports = app
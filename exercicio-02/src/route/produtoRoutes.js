const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoControllers');

// Rota 1: Mostrar todos os resultados do JSON
router.get('/resultado', produtoController.getTodosResultados);

// Rota 2: Buscar produto por nome
router.get('/busca/:busca', produtoController.getBuscaPorNome);

// Rota 3: Criar novo produto
router.post('/produto', produtoController.criarProduto);

module.exports = router;
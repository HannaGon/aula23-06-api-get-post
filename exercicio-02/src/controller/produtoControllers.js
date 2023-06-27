const db = require ("../model/produtoModels")

// Mostrar todos os resultados do JSON
const getTodosResultados = (req, res) => {
  const produto = db;
  res.status(200).send(produto)

};

// Buscar produto por nome
const getBuscaPorNome = (req, res) => {
  const { busca } = req.params;
  const produto = db;
  res.json(db);
};

// Criar novo produto
const criarProduto = (req, res) => {
  const novoProduto = req.body;
  res.json(criarProduto);
};

module.exports = {
  getTodosResultados,
  getBuscaPorNome,
  criarProduto
};
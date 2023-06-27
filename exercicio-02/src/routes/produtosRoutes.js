const express = require("express")
const postController = require("../controllers/produtosControllers")

const router = express.Router()

router.get("/exibir", postController.exibirTodos)
router.get("/busca/:busca", postController.buscaPorNome)

router.post("/criar", postController.cadastrarProdutos)

module.exports = router;
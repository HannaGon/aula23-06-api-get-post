const express = require("express")
const postController = require("../controllers/controllers")

const router = express.Router()

router.get("/exibir", postController.exibirTodos)
router.get("/busca/:busca", postController.buscarPorNome)
router.post("/cadastrar", postController.cadastrarProduto)

module.exports = router;
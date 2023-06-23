const express = require("express")
const livro = require("../controllers/livrosControllers")

const router = express.Router()

router.get("/livro", livro.obterTodos)
router.get("/livro/:id", livro.obterPorId)
router.post("/livro", livro.cadastrar)

module.exports = router

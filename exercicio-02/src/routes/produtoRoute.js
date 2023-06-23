const express = require("express")
const controller = require("../controllers/produtoController")

const app = express.Router()

app.get("/produto", controller.obterTodos)
app.get("/produto/nome/:nome", controller.obterPorNome)
app.post("/produto", controller.cadastrar)

module.exports = app

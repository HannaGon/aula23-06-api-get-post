const express = require("express")
const controller = require("../controllers/produtoController")

const app = express.Router()

app.get("/produto", controller.obterTodos)
app.get("/produto/:id", controller.obterPorId)
app.get("/produto/nome/:nome", controller.obterPorNome)
app.post("/produto", controller.cadastrar)
app.delete("/produto/:id", controller.deletar)
app.patch("/produto/:id", controller.atualizar)
app.put("/produto/:id", controller.atualizar)

module.exports = app

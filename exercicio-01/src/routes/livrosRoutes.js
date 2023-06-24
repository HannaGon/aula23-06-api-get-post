const express = require("express")
const livrosControllers = require("../controllers/livrosControllers")

const router = express.Router()

router.get("/lista", livrosControllers.exibirTodos)
router.get("/id/:id", livrosControllers.exibirPorId)

router.post("/novo", livrosControllers.cadastrarNovo)

module.exports=router;
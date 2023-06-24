const express = require("express")
const mercadoControllers = require("../controllers/mercadoControllers")

const router = express.Router()

router.get("/all", mercadoControllers.exibeTodos)
router.get("/search/:busca", mercadoControllers.exibeId)

router.post("/novo", mercadoControllers.novoProd)

module.exports=router;
const express = require("express")
const mercadoRoutes = require("./routes/mercadoRoutes")

const app = express()
app.use(express.json())

app.use("/mercado", mercadoRoutes)

module.exports=app;
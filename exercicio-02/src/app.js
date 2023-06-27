const express = require("express")
const postRouter = require("./routes/produtosRoutes")

const app = express()

app.use(express.json())
app.use("/produtos", postRouter)

module.exports = app;
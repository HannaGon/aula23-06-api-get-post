const express = require("express")
const postRouter = require("./routes/livrosRoutes")

const app = express()

app.use(express.json())
app.use("/livros", postRouter)

module.exports = app;
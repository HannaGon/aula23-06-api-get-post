const express = require("express")
const livrosRoutes = require("./routes/livrosRoutes")

const app = express()
app.use(express.json())

app.use("/livros", livrosRoutes)

module.exports=app;
const db = require("../models/livrosModels")

const exibirTodos = async(request, response)=>{
    const todos = await db()
    response.status(200).send(todos)
}

const cadastrarLivros = async(request, response)=>{
    todos = await db()
    const {
        title, author
    }=request.body[0]
    const novoLivro = {id:todos.length, title, author}
    todos.push(novoLivro)
    response.status(201).send(novoLivro)
}

const exibirLivroPorId = async(request,response)=>{
    todos = await db()
    const{ id } = request.params
    const livroEncontrado = todos.find(livro => livro.id == id)
    if(!livroEncontrado) return response.status(404).send({
        message: `Livro com ${id} não encontrado`
    })
    response.status(200).send(livroEncontrado)
}

module.exports = {
    exibirTodos,
    cadastrarLivros,
    exibirLivroPorId
}
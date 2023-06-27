const db = require("../models/livrosModels")

const exibirTodos = async (request, response) => {
    const todos = await db()
    response.status(200).send(todos)
}
const exibirPorId = async (request, response) => {
    todos = await db()
    const { id } = request.params
    const livroEncontrado = todos.find(aluno => aluno.id == id)
    if (!livroEncontrado) return response.status(404).send({ message: + " Livro com ID " + id + " não encontrado " })
    response.status(200).send(livroEncontrado)
}
const cadastrarAluno = async (request, response) => {
    todos = await db()
    const {
        nome: titulo, idade: autor
    } = request.body[0]
    const novoLivro = { id: todos.length, nome: titulo, idade: autor }
    todos.push(novoLivro)
    response.status(201).send(novoLivro)
}

module.exports = {
    exibirTodos,
    exibirPorId,
    cadastrarAluno
}
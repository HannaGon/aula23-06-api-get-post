const livros = require("../models/livrosModels")

const obterTodos = (request, response) => {
    response.status(200).send(livros)
}

const obterPorId = (request, response) => {
    const id = request.params.id
    const livro = livros.find(livro => livro.id == id)
    if (livro) {
        response.status(200).send(livro)
    } else {
        response.status(404).send({ message: `Não foi encontrado o livro de ID ${id}.` })
    }
}

const cadastrar = (request, response) => {
    const { titulo, autor } = request.body
    const livro = { id: livros.length, title: titulo, author: autor }
    livros.push(livro)
    response.status(200).send(livro)
}

module.exports = {
    obterTodos,
    obterPorId,
    cadastrar
}

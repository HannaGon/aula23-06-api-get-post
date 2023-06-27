const db = require("../models/models")

const exibirTodos = async (request, response) => {
    const todos = await db()
    response.status(200).send(todos)
}

const buscarPorNome = async (request, response) => {
    const todos = await db()
    const { busca } = request.params
    const resultadoBusca = []
    for (let produtos of todos) {
        if (produtos.produto.toLowerCase().includes(busca.toLowerCase())) {
            resultadoBusca.push(produtos)
        }
        else { }
    }

    response.status(200).send(resultadoBusca)
}

const cadastrarProduto = async (request, response) => {
    todos = await db()
    const {
        produto, tipo, preco
    } = request.body[0]
    const novoProduto = { produto, tipo, preco }
    todos.push(novoProduto)
    response.status(201).send(novoProduto)
}




module.exports = {
    exibirTodos,
    buscarPorNome,
    cadastrarProduto

}
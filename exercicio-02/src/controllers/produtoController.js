const produtos = require("../models/produtoModel")

const obterTodos = (request, response) => {
    response.status(200).send(produtos)
}

const obterPorNome = (request, response) => {
    const nome = request.params.nome
    const produto = produtos.find(produto => produto.produto.toLowerCase() == nome.toLowerCase())
    if (produto) {
        response.status(200).send(produto)
    } else {
        response.status(404).send({ mensagem: `Não foi encontrado o produto de nome ${nome}.` })
    }
}

const cadastrar = (request, response) => {
    const { produto, tipo, preco } = request.body
    const produtoModel = { produto, tipo, preco }
    produtos.push(produtoModel)
    response.status(200).send(produtoModel)
}

module.exports = {
    obterTodos,
    obterPorNome,
    cadastrar
}

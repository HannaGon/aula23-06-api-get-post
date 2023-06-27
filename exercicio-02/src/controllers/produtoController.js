const produtos = require("../models/produtoModel")
const crypto = require("crypto")

const obterTodos = (request, response) => {
    response.status(200).send(produtos)
}

const obterPorId = (request, response) => {
    const id = request.params.id
    const produto = produtos.find(produto => produto.id == id)
    if (produto) {
        response.status(200).send(produto)
    } else {
        response.status(404).send({ mensagem: `Não foi encontrado o produto de ID ${id}.` })
    }
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

const atualizar = (request, response) => {
    const id = request.params.id
    const produtoModel = produtos.find(produto => produto.id == id)
    if (produtoModel) {
        Object.keys(produtoModel).forEach(key => {
            if (request.body.hasOwnProperty(key)) {
                produtoModel[key] = request.body[key]
            }
        })
        response.status(200).send(produtoModel)
    } else {
        response.status(404).send({ mensagem: `Não foi encontrado o produto de ID ${id}.` })
    }
}

const cadastrar = (request, response) => {
    const { produto, tipo, preco } = request.body
    const produtoModel = { id: crypto.randomUUID(), produto, tipo, preco }
    produtos.push(produtoModel)
    response.status(200).send(produtoModel)
}

const deletar = (request, response) => {
    const id = request.params.id
    const produtoIndex = produtos.findIndex(produto => produto.id == id)
    if (produtoIndex >= 0) {
        produtos.splice(produtoIndex, 1)
        response.status(200).send({ message: `O produto de ID ${id} foi deletado.` })
    } else {
        response.status(404).send({ mensagem: `Não foi encontrado o produto de ID ${id}.` })
    }
}

module.exports = {
    obterTodos,
    obterPorId,
    obterPorNome,
    atualizar,
    cadastrar,
    deletar
}

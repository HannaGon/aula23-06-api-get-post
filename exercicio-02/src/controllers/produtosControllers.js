const db = require("../models/produtosModels")

const exibirTodos = async(request, response)=>{
    const todos = await db()
    response.status(200).send(todos)
}

const cadastrarProdutos = async(request, response)=>{
    todos = await db()
    const {
        produto, tipo, preço
    }=request.body[0]
    const novoProduto = {produto, tipo, preço}
    todos.push(novoProduto)
    response.status(201).send(novoProduto)
}

/*const exibirProdutoPorNome = async(request,response)=>{
    todos = await db()
    const{ busca } = request.params
    const produtoEncontrado = todos.find(prod => prod.produto == busca)
    if(!produtoEncontrado) return response.status(404).send({
        message: `Produto com ${busca} não encontrado`
    })
    response.status(200).send(produtoEncontrado)
}*/

const buscaPorNome = async(request, response)=>{
    todos = await db()
    const { busca } = request.params
    const requestBusca = []
    for (let prod of todos){
        if(prod.produto.toLowerCase().includes(busca.toLowerCase())){
            requestBusca.push(prod)
        }else{}
    }
    response.status(200).send(requestBusca)
}

/*produtos.produto.toLowercase().includes(busca.toLowercase())*/
module.exports = {
    exibirTodos,
    cadastrarProdutos,
    buscaPorNome
}
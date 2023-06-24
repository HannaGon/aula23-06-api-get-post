const db = require("../models/livrosModels")

const exibirTodos = async(req,res)=>{
    livros = await db()
    res.status(200).send(livros)
}

const exibirPorId = async(req,res)=>{
    livros = await db()
    const { id } = req.params
    const livroEncontrado = livros.find(livro =>livro.id == id)
    if (!livroEncontrado) return res.status(404).send({
        message:`Não foram encontrados resultados para o id${id}`
    })
    res.status(200).send(livroEncontrado)
}

const cadastrarNovo = async(req,res)=>{
    livros = await db()
    const {
        title, author
    }=req.body[0]
    const novoLivro = {id:livros.length,title,author}
    livros.push(novoLivro)
    res.status(201).send((novoLivro))
}

module.exports={
    exibirTodos,
    exibirPorId,
    cadastrarNovo
}
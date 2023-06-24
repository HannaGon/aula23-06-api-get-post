const db = require("../models/mercadoModels")

const exibeTodos = async(req,res)=>{
    try {
        const produtos = await db()
        res.status(200).send(produtos)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const exibeId = async(req,res)=>{
    try {
        const produtos = await db()
        const { busca } = req.params
        const resBusca = []
        for(let prod of produtos){
         if (prod.produto.toLowerCase().includes(busca.toLowerCase())){
            resBusca.push(prod)
         }
        }
        if (resBusca[0]==undefined) return res.status(404).send({
            message: `${busca} não encontrado`
        })
        res.status(200).send(resBusca)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const novoProd = async(req,res)=>{
    try {
        const produtos = await db()
        const {
            produto,tipo,preco
        }=req.body[0]
        const novoProduto = {produto,tipo,preco}
        produtos.push(novoProduto)
        res.status(201).send(novoProduto)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports={
    exibeTodos,
    exibeId,
    novoProd
}
const db = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            return res(require("../../data/produtos.json"))
        }, 1500);
    })
}

module.exports=db;
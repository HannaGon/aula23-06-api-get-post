const db = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return resolve(require("./livros.json"))
        }, 1500);
    })
}
module.exports=db;
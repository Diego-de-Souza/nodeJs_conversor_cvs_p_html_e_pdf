const fs = require("fs");

var conteudo;

fs.readFile("./diegodesouza", {encoding: 'utf-8'}, (erro, dados)=>{
    if(erro){
        console.log("Ocorreu uma falha durante a leitura do arquivo!");
    }else{
        conteudo = dados;
        return conteudo;
    }
});

fs.writeFile("./diegodesouza", "Nome: Diego de SOuza Lima", (err)=>{
    if(err){
        console.log("Erro durante o salvamento...");
    }
})
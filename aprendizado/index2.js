const fs = require("fs");

function modificarUsuario(nome, curso, categoria){
    fs.readFile("./usuario.json", {encoding: 'utf-8'}, (erro, dados)=>{
        if(erro){
            console.log("Um erro aconteceu!");
        }else{
            var conteudo = JSON.parse(dados); // converte texto para objeto javascript(JSON)
            conteudo.nome = "Emilly Lorrane"
            conteudo.curso = "Ensino médio"
    
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro)=>{ //stringfy transforma objeto javascript em texto
                if(erro){
                    console.log("Um erro aconteceu durante a escrita!");
                }
            })
            console.log(conteudo);
        }
    })
}

modificarUsuario("Thomas Anderson", "JavaScript do inicio ao Profissional", "JavaScript" );

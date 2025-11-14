function verificacao(){
    let nomeInput = document.getElementById("nome");
    let idadeInput = document.getElementById("idade");
    let mensagemResultado = document.getElementById("resultado");

    let nome = nomeInput.value.trim();
    let idade = parseInt(idadeInput.value);

    let vereador = 18;
    let prefeitoDeputadoJuizPaz = 21;
    let governador = 30;
    let senadorPresidente = 35;
    let mensagem = "";
    let cargosElegiveis = [];

    if (!nome || isNaN(idade)){
        mensagem = "Nome e Idade são obrigatórios";
        mensagemResultado.innerHTML=mensagem;
        return;
    }
    if (idade<vereador){
        mensagem = "Você não atende a Idade mínima de para se tornar um vereador.";
        mensagemResultado.innerHTML=mensagem;
      
    }else{
        cargosElegiveis.push("Vereador");
        if (idade>=prefeitoDeputadoJuizPaz){
            cargosElegiveis.push("Prefeito"); 
            cargosElegiveis.push("Deputado"); 
            cargosElegiveis.push("Juiz de Paz");
            if(idade>=governador){
                cargosElegiveis.push("Governador");
                if (idade>=senadorPresidente){
                    cargosElegiveis.push("Senador"); 
                    cargosElegiveis.push("Presidente");
                }
            }

        }
        mensagem = `${nome} pode ser eleito: \n <br/> ${cargosElegiveis.join("<br><hr>")} `;
       
    }
    
    mensagemResultado.innerHTML=mensagem;
}   
function mudarCorDeFundo(cor){
    document.body.style.backgroundColor=cor;
}
let corEscolhida = prompt("Digite o nome de uma cor em inglês(ex: red, blue, green):")
mudarCorDeFundo(corEscolhida);
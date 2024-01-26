let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = randomNumber();
let tentativas = 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function initialText() {
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');    
}

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela("h1","Você Acertou !!!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);   
        document.getElementById('reiniciar').removeAttribute('disabled');     
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p","O numero secreto é menor");
        }else{
            exibirTextoNaTela("p","O numero secreto é maior");
        }  
    }

    tentativas++;

    limparCampo();

}

function randomNumber() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return randomNumber();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = randomNumber();
    limparCampo();
    tentativas = 1;
    initialText();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

initialText()
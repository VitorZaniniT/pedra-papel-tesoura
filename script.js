function jogar(escolhaJogador){

let opcoes = ["pedra","papel","tesoura"]
let escolhaComputador = opcoes[Math.floor(Math.random()*3)]

let resultado = ""

if(escolhaJogador === escolhaComputador){
resultado = "Empate!"
}
else if(
(escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
(escolhaJogador === "papel" && escolhaComputador === "pedra") ||
(escolhaJogador === "tesoura" && escolhaComputador === "papel")
){
resultado = "Você ganhou!"
}
else{
resultado = "Você perdeu!"
}

document.getElementById("resultado").textContent =
"Computador escolheu " + escolhaComputador + " — " + resultado

}
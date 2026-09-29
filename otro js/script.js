

let pontos = Number(prompt("Informe a quantidade de pontos"))
let classe = ""
let anosDeCliente = Number(prompt("Informe quantos anos o cliente tem"))


if (pontos >= 0 && pontos <= 99) {
    classe = "bronze"
} else if ( 100 <= pontos && pontos <= 499 ) {
    classe = "prata"
} else if (500 <= pontos && pontos <= 999) {
    classe = "ouro"
} else if (1000 <= pontos && anosDeCliente >=1 ) {
    classe = "diamante"
} 

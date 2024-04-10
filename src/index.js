# 1️⃣ Desafio Classificador de nível de Herói

let nomeDoHeroi = "NatanCarFF"
let xpDoHeroi = 1

switch (xpDoHeroi) {
    case (xpDoHeroi <= 1000):
    console.log("O Herói de nome "nomeDoHeroi"está no nível de Ferro")
        break;

    case (xpDoHeroi <= 2000):
    console.log("Bronze")
        break;

    case (xpDoHeroi <= 5000):
    console.log("Prata")
        break;

    case (xpDoHeroi <= 7000):
    console.log("Ouro")
        break;

    case (xpDoHeroi <= 8000):
    console.log("Platina")
        break;

    case (xpDoHeroi <= 9000):
    console.log("Ascendente")
        break;

    case (xpDoHeroi <= 10000):
    console.log("Imortal")
        break;

    default:
    console.log("Radiante")

}
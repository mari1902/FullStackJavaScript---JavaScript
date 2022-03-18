let warpCount = 0
let chosenOption = ""

let spaceshipName = prompt("Qual o nome da nave?")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")


while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1 - Sim\n2 - Não")
}

if(chosenOption == "2") {
    alert("Nome da nave: " + spaceshipName + "\n" + "O número de dobras espaciais foi de: " + warpCount)
}


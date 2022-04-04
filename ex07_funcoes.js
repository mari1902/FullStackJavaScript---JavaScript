let velocity = 0 
let chosenOption = ""

let spaceshipName = prompt("Qual o nome da nave que você gostaria?")

let choice = prompt(
    "Opção 1: Você gostaria de acelerar a nave em 5km/s? " + "\nOpção 2: Você gostaria de desacelerar em 5km/s?" + 
    "\nOpção 3: Imprimir dados de bordo?" +
    "\nOpção 4: Sair do programa"
)

function menu() {
    switch(choice) {
    case "1":
        while(choice == "1") {
            let acceleration = 5
            let newVelocity = velocity + acceleration 
            return menu
        }
        break
    case "2":
        while(choice == "2") {
            let newVelocity = velocity - acceleration 
            if(newVelocity < 0) {
                alert('Não é possível realizar essa operação')
            } else {
                return menu
            }
        }
        break
    case "3":
        alert('O nome da nave é ' + spaceshipName + '\ne sua velocidade atual é de ' + `${newVelocity}`)
        break
    case "4":
        alert('Sair do programa')
        break
    default:
        alert('Opção não encontrada')

}
}

menu()


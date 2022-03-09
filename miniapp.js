let departureDateEntry = prompt("Digite sua data de partida (formata DD/MM/YYYY)")

let departureDate = moment(departureDateEntr, "DD/MM/YYYY")

let today = moment()

let daDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos \n2 - Minutos\n3 - Horas\n4 - Dias")

if(chosenOption == 1) {
    
}
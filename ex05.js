let chosenDistance = prompt("Qual a distância desejada em anos-luz?")

let chosenOption = prompt("Para qual unidade você deseja converter?\n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)")


let chosenUn 
let convertedDistance

switch(chosenOption) {
    case "1":
        chosenUn = "Parsec"
        convertedDistance = chosenDistance * 0,306601
        alert("Distância em Anos-luz: " + chosenDistance + "\n" + chosenUn + ": " + convertedDistance + " pc")
        break
    case "2":
        chosenUn = "UA"
        convertedDistance = chosenDistance * 63241.1    
        alert("Distância em Anos-luz: " + chosenDistance + "\n" + chosenUn + ": " + convertedDistance + " AU")
        break
    case "3":
        chosenUn = "Quilômetros"
        convertedDistance = chosenDistance * (9, 5 * Math.pow(10, 12))    
        alert("Distância em Anos-luz: " + chosenDistance + "\n" + chosenUn + ": " + convertedDistance + " km")
        break
    default:
        chosenUn = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
        alert("Distância em Anos-luz: " + chosenDistance + "\nUnidade não identificada: Conversão fora do escopo.")
}



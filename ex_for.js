let spaceship = prompt('Qual o nome da nave desejado?')
let charToReplace = prompt('Qual caracter gostaria de substituir?')
let replacementChar = prompt('Por qual caracter você gostaria de substituir?')

let newSpaceship = ''

for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert(`O novo nome da nave é ${newSpaceship}`)
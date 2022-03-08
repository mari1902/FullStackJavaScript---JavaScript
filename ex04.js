let pilotname = prompt("Qual o seu nome, piloto?")

let initialvel = 0

let acelerationvel = prompt("Qual velocidade gostaria de acelerar?")

let velconfirmation = confirm("Sua nova velocidade será de " + acelerationvel + "km/s")

if(velconfirmation) {
    initialvel = acelerationvel
}

let acelerationvel = xxx

if(acelerationvel < 0) {
    console.log("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (acelerationvel < 40) {
    console.log("Você está devagar, podemos aumentar mais")
}

if(acelerationvel >= 40 && acelerationvel< 80) {
    console.log("Parece uma boa velocidade para manter")
} else if(acelerationvel >= 80 && acelerationvel < 100) {
    console.log("Velocidade alta. Considere diminuir")
} else {
    console.log("Velocidade perigosa. Controle automático forçado")
}

alert(pilotname + ", sua velocidade atual é de " + acelerationvel)
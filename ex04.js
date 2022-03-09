let pilotname = prompt("Qual o seu nome, piloto?")

let initialvel = 0

let acelerationvel = prompt("Qual velocidade gostaria de acelerar?")

let velconfirmation = confirm("Sua nova velocidade será de " + acelerationvel + "km/s")

if(velconfirmation) {
    initialvel = acelerationvel
}

if(acelerationvel <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (acelerationvel < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if(acelerationvel< 80) {
    alert("Parece uma boa velocidade para manter")
} else if(acelerationvel < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}

alert(pilotname + ", sua velocidade atual é de " + acelerationvel + "km/s")
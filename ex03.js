let nomeMaisVelha = prompt("Qual o seu nome da pessoa mais velha?")
let idadeMaisVelha = prompt("Qual a idade da pessoa mais velha?")
let nomeMaisNova = prompt("Qual o nome da pessoa mais nova?")
let idadeMaisNova = prompt("Qual a idade da pessoa mais nova?")
let diferençaIdade = idadeMaisVelha - idadeMaisNova

alert(
    `Nome da pessoa mais velha: ${nomeMaisVelha}\nIdade: ${idadeMaisVelha}\n\nNome da pessoa mais nova: ${nomeMaisNova}\nIdade: ${idadeMaisNova}\n\nA diferença de idade de vocês é: ${diferençaIdade}`
)
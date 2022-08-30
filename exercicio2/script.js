let primeiroNumero = Number(prompt("Digite o primeiro número: "))
let segundoNumero = Number(prompt("Digite o segundo número: "))
const divisao1 = primeiroNumero%segundoNumero===0
const divisao2 = segundoNumero%primeiroNumero===0

console.log("O primeiro numero é maior que segundo?: ",primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?: ",primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?: ",divisao1)
console.log("O segundo numero é divisível pelo primeiro?: ",divisao2)

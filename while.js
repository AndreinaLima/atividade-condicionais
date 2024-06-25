// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.

let numero1 = 2

while (numero1 <= 10) {
  if (numero1 % 2 === 0) {
    console.log(numero1)
  }
  numero1++
}

// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70

let multiplicador = 1
let tabuada = 7

while (multiplicador <= 10) {
  let resultado = tabuada * multiplicador
  multiplicador++
  console.log(tabuada + " x " + multiplicador + " = " + resultado)
}


// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

let cont = 1
let soma = 0;

while (cont <= 999) {
  if (cont % 2 !== 0){
    soma = soma + cont
  }
  cont++
}

console.log("Soma dos impares: " + soma)

// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.

let contador = 1
let divisiveis = 0

while (contador <= 1000) {
  if (contador % 9 === 0) {
    console.log(contador + " é divisível por 9.")
    divisiveis++
  }
  contador++
}

console.log("Total de números divisíveis por 9: " + divisiveis)
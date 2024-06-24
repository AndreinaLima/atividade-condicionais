/* 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação */

let n1 = 7
let n2 = 8
let n3 = 6

let media = (n1 + n2 + n3) / 3
console.log("Média: " + media)

if (media >= 7) {
  console.log("Status: Aprovado")
} else if (media >= 5 && media < 7) {
  console.log("Status: Reforço")
} else {
  console.log("Status: Reprovado")
}

/* 2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC. */

let peso = 80
let altura = 1.75
let imc = peso / (altura * altura)

console.log("Imc: " + imc.toFixed(2))

if (imc < 17) {
  console.log("Classificação do imc: Muito abaixo do peso")
} else if(imc >=17 && imc < 18.5) {
  console.log("Classificação do imc: Abaixo do peso")
} else if (imc >=18.5 && imc < 25) {
  console.log("Classificação do imc: Peso normal")
} else if (imc >=25 && imc < 30) {
  console.log("Classificação do imc: Acima do peso")
} else if (imc >= 30 && imc < 35) {
  console.log("Classificação do imc: Obesidade grau I")
} else if (imc >=35 && imc <=40) {
  console.log("Classificação do imc: Obesidade grau II")
} else {
  console.log("Classificação do imc: Obesidade grau III ")
}

/* 3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais! */

let a = 10
let b = 10

if (a > b ) {
  console.log("A é maior que B")
} else if (a < b) {
  console.log("A é menor que B")
} else {
  console.log("São iguais")
}

/* 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário. */

let salario = 1000
let quantidadeDependentes = 4

if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
  salario = salario * 1.3
} else if (quantidadeDependentes > 5) {
  salario *= 1.4
}

console.log("Novo salário: " + salario)

/* 5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil. */


let domingo = 1
let segunda = 2
let terça = 3
let quarta = 4
let quinta = 5
let sexta = 6
let sábado = 7

let dia = 4

if (dia === 1 || dia === 7) {
  console.log("É final de semana")
} else {
  console.log("É dia útil")
}

/* 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400. */

let ano = 2001

if (ano % 4 === 0 && ano % 100 !== 0 ) {
  console.log(ano + " é um ano bissexto")
} else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) {
  console.log(ano + " é um ano bissexto")
} else {
  console.log(ano + " não é um ano bissexto")
}

/* 
7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso. */

let idade = 131

if (idade < 0 || idade > 130) {
  console.log(idade + " é uma idade inválida")
}

/* 
8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */

let turno = "M"

if (turno === "M") {
  console.log("Bom Dia!")
} else if (turno === "V") {
  console.log("Boa Tarde!")
} else if (turno === "N") {
  console.log("Boa Noite!")
} else {
  console.log("Valor Inválido!")
}


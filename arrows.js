// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.

const receberNumeros = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}

let numeros = receberNumeros(4, 10)
console.log(numeros)

// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

const palavras = ["sorriso", "alegria", "gato"]

palavras.forEach((palavra) => {
  const primeiraLetraMaiuscula = palavra[0].toUpperCase() + palavra.slice(1) 

  console.log(primeiraLetraMaiuscula)
})

// 3. Use map para transformar um array de números, multiplicando cada número por 5.

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const novosValores = valores.map((valor) => valor * 5)
console.log(novosValores)

// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.
let idades = [12, 20, 30, 10, 18, 23]

const deMaior = idades.filter((idade) => idade >= 18)
console.log(deMaior)


// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.
const livro = {
  titulo: "O livro",
  autor: "Marcos",
  publicacao: {
    editora: "nova",
    ano: "2024"
  }
}

console.log(livro.publicacao.editora)

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.

const [primeiraFruta, segundaFruta] = ["Melancia", "Banana", "Kiwi", "Abacate", "Maça", "Morango"]
console.log(primeiraFruta)
console.log(segundaFruta)

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.
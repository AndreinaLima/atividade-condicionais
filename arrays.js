// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.

function alunosQueFaltaram (alunos, alunosPresentes) {
  let alunosComFalta = [];

  for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];

    if (!alunosPresentes.includes(aluno)) {
      alunosComFalta.push(aluno);
    }
  }

  return alunosComFalta
}

let alunos = ["Marcos", "Allan", "Maria", "Alice", "Eduardo"]
let alunosPresentes = ["Allan", "Maria", "Eduardo"]

let alunosComFalta = alunosQueFaltaram(alunos, alunosPresentes)
console.log("Alunos que faltaram:" + alunosComFalta)


// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
function aoQuadrado(numeros) {
  let elevados = [];

  for (let i = 0; i < numeros.length; i++) {
     let quadrado = numeros[i] * numeros[i];
     elevados.push(quadrado)
  }

  return elevados
}

let numeros = [2, 4, 6, 8]

let elevados = aoQuadrado(numeros)
console.log("Valores elevados ao quadrado:" + elevados)

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

function arquivos(nomesDosArquivos, extensao) {
  let comExtensao = [];

  for (let i = 0; i < nomesDosArquivos.length; i++ ) {
    let arquivo = nomesDosArquivos[i];

    if (arquivo.endsWith(extensao)) {
      comExtensao.push(arquivo);
    }
  }

  return comExtensao;
}

let nomesDosArquivos = ["logo.jpg", "logo.png", "logo.jpeg", "banner.jpg"];

let extensao = ".jpg";

let comExtensao = arquivos(nomesDosArquivos, extensao);

console.log("Arquivos com extensão " + extensao + ":", comExtensao);




// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

let ateDez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(f of ateDez) {
  console.log(f)
}

console.log("Usando for comum: ")

for (let i = 0; i < ateDez.length; i++) {
  console.log(ateDez[i])
}


// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.

let array1 = ["Pamonha", "Vida", "Escola", "Gelo", "Piscina"];

function novoArray(array1) {
  let array2 = [];

  for(let i = 0; i < array1.length; i++) {
    let palavra = array1[i];
    if (palavra.length > 5) {
      array2.push(palavra)
    }
  }
  return array2;
}

array2 = novoArray(array1)
console.log(array2)

// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.

let numerosete = [1, 2, 3, 7, 5, 6, 4]

function encontrarMaiorNumero(array) {
  let maior = array[0] 

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i] 
    }
  }

  return maior 
}

let maiorNumero = encontrarMaiorNumero(numerosete)

console.log("O maior número é:", maiorNumero)



// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.

function extrair(cpf) {
  let ultimosDigitos = cpf.slice(12)

  return ultimosDigitos;
}

let cpf = "056.985.990-23"
let ultimosDigitos = extrair(cpf)

console.log("Últimos dígitos verificadores: " + ultimosDigitos)

// 8. Crie uma função que inverte uma string. Retorna ela invertida.

function reverterString(string) {
  return string.split("").reverse().join("")
}

let string = "String"
let stringInvertida = reverterString(string);
console.log("String invertida:", stringInvertida)

// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.

function repetirPalavra(palavra, numero) {
  let resultado = ''
  for (let i = 0; i < numero; i++) {
     resultado += palavra
  }
  return resultado;
}

console.log(repetirPalavra("batata", 3))

// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

function receberStrings(str1, str2) {
  if (str1 === str2) {
    return true
  } else {
    return false
  }
}

console.log(receberStrings("Escola", "Escola")); // true
console.log(receberStrings("Escola", "escola")); // false

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'


function formatarData (dataArray, separador) {
  let dataPartes = dataArray[0].split("/");
  let dataFormatada = dataPartes.join(separador);

   return dataFormatada
}

let data = ["15/03/2000"]
console.log(formatarData(data, "."))


// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'

function busca(array, valorBusca, valorPadrao) {
  if (array.includes(valorBusca)) {
    return valorBusca;
  } else {
    return valorPadrao;
  }
}

let array = ['maçã', 'banana', 'laranja'];

console.log(busca(array, 'batata', 'não tem batata')); // "não tem batata"
console.log(busca(array, 'banana', 'não tem banana')); // "banana"

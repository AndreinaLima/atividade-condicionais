// 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

function calculaImc(peso, altura) {
  return (peso / (altura * altura)).toFixed(2)
}

function statusImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso"
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal"
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso"
  } else {
    return "Obesidade"
  }
}

let imc = calculaImc(80, 1.7)
console.log(`O IMC é: ${imc}`)
console.log(`Status: ${statusImc(imc)}`)


// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function porcentagem(numero) {
  if (numero >= 0 && numero <= 1) {
    return (numero * 100).toFixed(1) + "%"
  } else {
    return "Número fora do intervalo de 0 a 1"
  }
}

let numeroEmPorcento = porcentagem(0.456)
console.log(numeroEmPorcento)


// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

// function numeroNegativo(numeroN) {
//   if (numeroN <0) {
//     return true
//   } else {
//     return false
//   }
// }

// let ehNegativo = numeroNegativo(-2)
// console.log(ehNegativo)
function numeroNegativo(numeroN) {
  return numeroN < 0;
}

let ehNegativo = numeroNegativo(-2);
console.log(ehNegativo); 


// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contar(numeroQualquer) {
  for (let i = 1; i <= numeroQualquer; i++) {
    console.log(i)
  }
}
contar(10)

// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

function nomeESobrenome(nome, sobrenome) {
  let nomeCompleto = nome + " " + sobrenome;
  console.log(`O nome completo é: ${nomeCompleto}`)
  return nomeCompleto;
}
nomeESobrenome("Andreina", "Lima");

// Ou

function nomeESobrenome(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

let nomeCompleto = nomeESobrenome("Andreina", "Lima");
console.log(`O nome completo é: ${nomeCompleto}`); 


// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

function areaDoCirculo(PI, raio) {
  return  (PI * raio * raio);
}

let resultado = areaDoCirculo(3.14, 10);
console.log(resultado)



// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function areaDoCirculo(PI, raio) {
  return PI * raio * raio
}

function nivel(area) {
  if (area >= 1 && area <= 20) {
    return "Nível I"
  } else if (area >= 21 && area <= 40) {
    return "Nível II"
  } else {
    return "Nível inválido"
  }
}

let resultado2 = areaDoCirculo(3.14, 3)
console.log(`Área do círculo: ${resultado2}`)
console.log(`Nível: ${nivel(resultado2)}`)



// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function str (palavra) {
  return palavra.toLowerCase()
}

let lower = str("Alo")
console.log(lower)


// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function contarCaracteres(string, caractere) {
  let cont = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === caractere) {
      cont++ 
    }
  }

  return cont
}

let minhaString = "olá, pessoal"
let caractereProcurado = "o"
let ocorrencias = contarCaracteres(minhaString, caractereProcurado)

console.log(
  `O caractere '${caractereProcurado}' aparece ${ocorrencias} vezes na string.`
)



// 1. Escreva um programa que inverte uma string

let palavra = "Ola";
let palavraRevertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraRevertida += palavra[i];
}

console.log(palavraRevertida); 




// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"

let frase = "Sou aluna da SoulCode";
console.log(frase.replace("SoulCode", "###"))

// 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com

let email = "email@soulcode.com"

if (email.includes("soulcode.com")) {
  console.log("Muito bem!")
} else {
  console.log("Não inclui")
}


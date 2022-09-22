"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//sub - a função está engessada
function escreveConsole() {
    console.log("Vai Corinthians!");
}
//function - a função é livre
function escreve() {
    return "Vai Corinthians!";
}
escreveConsole();
console.log(`O melhor time do mundo é o ${escreve()}`);
//Existem duas categorias de funções.
//funções built-in - são funções que já vem com o javascript
//user defined function - são funções que o usuário cria
//funções built-in
const empresa = "Avanade";
console.log(empresa.toUpperCase(), empresa.toLowerCase(), empresa.length);
//sexta-feira, 16 de setembro de 2022 14:38:00 BRT
const locale = 'pt-br';
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
console.log(new Date().toLocaleDateString(locale, options));
const user = {
    name: 'João',
    age: 25,
    email: 'joao@gmail.com',
    address: {
        street: 'Rua ABC',
        number: 1000,
        city: 'São Paulo',
        state: 'SP',
    },
    cpf: '123.456.789-00',
};
console.log(user);
//Prettier - ferramenta que formata o código - linter

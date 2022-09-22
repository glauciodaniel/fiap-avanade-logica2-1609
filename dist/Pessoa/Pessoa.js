"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    // encapsulamento - modificadores de acesso.
    //public - acessível por todos
    //protected - acessível apenas dentro da classe e das classes filhas
    //private - acessível apenas dentro da classe
    //static - Não precisa instanciar a classe para acessar o método ou propriedade
    nome;
    idade;
    constructor(parametroNome, parametroIdade) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de idade ${this.idade} está andando`);
    }
}
exports.default = Pessoa;

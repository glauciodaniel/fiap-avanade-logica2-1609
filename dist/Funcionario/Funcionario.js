"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Pessoa"));
class Funcionario extends Pessoa_1.default {
    ri;
    cpf;
    static ipAddress = '127.0.0.1';
    _salario = 0;
    isAdmin = true;
    constructor(parametroNome, parametroIdade, parametroRi, parametroCPF, parametroSalario) {
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCPF;
        this.salario = parametroSalario;
        console.log(`O funcionário ${this.nome} de idade ${this.idade} ganha ${this.salario}`);
    }
    //getter - acessar o valor de um atributo privado
    get salario() {
        return (this.isAdmin) ? this._salario : 0;
    }
    //setter - alterar o valor de um atributo privado
    set salario(valor) {
        if (valor < 1200) {
            this._salario = 1200;
        }
        else {
            this._salario = valor;
        }
    }
}
exports.default = Funcionario;
//criando um objeto que instancia ou representa a classe Funcionario
const avanade = new Funcionario('João Rafael', 30, '123456', '123.456.789-00', 1000);
console.log("Acessando propriedade estática: " + Funcionario.ipAddress);
//console.log("Chamando a propriedade nome usando o objeto: NOME-", avanade.nome);
//encapsulamento - modificadores de acesso.
//getter e setter

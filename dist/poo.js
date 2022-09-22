"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
//instância. Quando um objeto é criado, ele é a instância de uma classe.
const funcionario = new Pessoa_1.default('João', 20);
const hcoder = new Funcionario_1.default('Rafael', 30);

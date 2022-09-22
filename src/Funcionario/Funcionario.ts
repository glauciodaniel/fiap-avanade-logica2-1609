import Pessoa from '../Pessoa';
class Funcionario extends Pessoa {

    ri: string;
    cpf: string;
    static ipAddress: string = '127.0.0.1';
    private _salario: number = 0;
    isAdmin:boolean =true;

    constructor(parametroNome: string, parametroIdade: number, parametroRi: string, parametroCPF: string, parametroSalario: number) {
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCPF;
        this.salario = parametroSalario;
        console.log(`O funcionário ${this.nome} de idade ${this.idade} ganha ${this.salario}`);
    }
    //getter - acessar o valor de um atributo privado
    get salario(): number {
        return (this.isAdmin) ? this._salario : 0;
    }
    //setter - alterar o valor de um atributo privado
    set salario(valor: number) {
        if(valor< 1200){
            this._salario = 1200;
        }else{
            this._salario = valor;
        }
    }
}
export default Funcionario;

//criando um objeto que instancia ou representa a classe Funcionario
const avanade = new Funcionario('João Rafael',30, '123456', '123.456.789-00', 1000);

console.log("Acessando propriedade estática: " + Funcionario.ipAddress);

//console.log("Chamando a propriedade nome usando o objeto: NOME-", avanade.nome);
//encapsulamento - modificadores de acesso.
//getter e setter
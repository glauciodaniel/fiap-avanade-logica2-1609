const nameUser: string = "Glaucio Daniel";
const idade: number = 37;
const statusUser: number = 4;
//se eu tentar atribuir uma string a idade, o typescript vai reclamar.
// se uma condição for verdadeira, ele ignora as demais condições.

if (statusUser == 1) {
  console.log("Usuário");
} else if (statusUser == 2) {
  console.log("Empresa");
} else if (statusUser == 3) {
  console.log("Admin");
} else {
  console.log("Status inválido");
}

// Response.redirect(addslashes(get("id")).".asp");

//string | char(11), varchar(100), text - 2147482647, nchar(400), nvarchar, ntext (n unicode, caracteres diferente do padrão ASC II)
//cdate, ceil, cint
// int, varchar(100), varchar(255)
// 1, glaucio daniel, glauciodaniel@gmail.com = 37 bytes

// nchar(400), nchar(400), nchar(400)
// 1, glaucio daniel, glauciodaniel@gmail.com= 1200 bytes

switch (statusUser) {
  case 1:
    console.log("Usuário");
    break;
  case 2:
  case 4:
    console.log("Empresa");
    break;
  case 3:
    console.log("Admin");
    break;
  default:
    console.log("Status inválido");
}

if (idade <= 2) {
  console.log("Bebê");
} else if (idade <= 11) {
  console.log("Criança");
} else if (idade <= 19) {
  console.log("Adolescente");
} else if (idade <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

console.log(`Seja Bem vindo ao curso de TypeScript ${nameUser} `);

//1920
//1921
//1922
//1923
///.
//.
//.
//2022
//estrutura de repetição
const yearFactory = new Date().getFullYear();

for (let x: number = 1920; x <= yearFactory; x++) {
  console.log(x);
}

let y: number = 10; //10

console.log(++y * 2, "pré-incremento"); // antes de qualquer coisa, incrementa o valor e depois faz a operação 11 * 2 = 22
console.log(y++ * 2, "pós-incremento"); // 11 * 2 = 22, depois incrementa o valor 12
console.log(y * 2, "pegadinha");
//operadores incrementais e decrementais
// x++ x = x + 1 - incremento
// ++x x = x + 1 - pré-incremento
// x-- x = x - 1 - decremento
// --x x = x - 1 - pré-decremento

let operacao = 100;

console.log(--operacao * 10); // tira 1 antes de qualquer coisa
console.log(operacao++ * 10); //realiza a operação de multiplicar, e somente depois incrementa o valor
console.log(operacao);

console.log("-------------------");

for (let x: number = yearFactory; x >= 1910; x -= 10) {
  if (x >= 1990 && x < 2000) {
    continue;
  }
  console.log(x);
}
console.log(1 % 2);
console.log("----------------------");

// 6 / 2 = 3  não sobra nada

for (let y = 1; y <= 100; y++) {
  if (y >= 50 && y <= 60) {
    if (y % 2 == 1 && y > 55) console.log(".");
    continue;
  }
  console.log(y);
}

for (let x: number = 0; x <= 10; x++) {
  if (x >= 3 && x <= 9) {
    if (x % 2 == 1 && x > 3) {
      console.log("."); //5,7,9
    }
    continue;
  }
  console.log(`2 x ${x} = ${x * 2}`);
}
/**
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
.
.
.
2 x 10 = 20




 */

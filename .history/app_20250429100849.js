// Problema: Verifique se um número é positivo, negativo ou zero.
// Descrição: Escreva um programa que solicite ao usuário um número e, em seguida, informe se o número é positivo, negativo ou zero.

const question0 = document.getElementById("question0");

const answer0 = Number(prompt("Digite um numero."));

if (answer0 > 0) {
    question0.innerHTML =  `O número ${answer0} é positivo`;
} else if (answer0 < 0) {
    question0.innerHTML = `O número ${answer0} é negativo`;
} else {
    question0.innerHTML = "O número é zero";
}

// answer0 > 0 ? `O número ${answer0} é positivo` : answer0 == 0 ? "O número é zero" : `O número ${answer0} é negativo`;
// Problema: Classificar um triângulo.
// Descrição: Crie um programa que peça ao usuário para inserir os comprimentos dos três lados de um triângulo e determine se é equilátero, isósceles ou escaleno.


const question1 = document.getElementById("question1");

const sideA = Number(prompt("Digite o primeiro lado."));
const sideB = Number(prompt("Digite o segundo lado."));
const sideC = Number(prompt("Digite o terceiro lado."));

if (sideA == sideB && sideA == sideC) {
    question1.innerHTML = "O triangulo é equilatero";
} else if (sideA == sideB && sideA != sideC || sideA == sideC && sideA != sideB || sideB == sideC && sideB != sideA) {
    question1.innerHTML = "O triangulo é isosceles";
} else {
    question1.innerHTML = "O triangulo é escaleno";
}

// Problema: Verificar se um ano é bissexto.
// Descrição: Escreva um programa que solicite ao usuário um ano e informe se ele é bissexto ou não.

const question2 = document.getElementById("question2");

const answer2 = Number(prompt("Digite um ano."));

if (answer2 % 4 == 0 || answer2 % 100 == 0 && answer2 % 400 != 0) {
    question2.innerHTML = `O ano ${answer2} é bissexto`;
} else {
    question2.innerHTML = `O ano ${answer2} não é bissexto`;
}

// Problema: Determinar o maior entre três números.
// Descrição: Desenvolva um programa que peça três números ao usuário e determine qual é o maior deles.

const question3 = document.getElementById("question3");

const number1 = Number(prompt("Digite o primeiro numero."));
const number2 = Number(prompt("Digite o segundo numero."));
const number3 = Number(prompt("Digite o terceiro numero."));

if (number1 > number2 && number1 > number3) {
    question3.innerHTML = `O número ${number1} é o maior entre os três.`
} else if (number2 > number1 && number2 > number3) {
    question3.innerHTML = `O número ${number2} é o maior entre os três.`
} else {
    question3.innerHTML = `O número ${number3} é o maior entre os três.`
}

// Problema: Verificar se um número é par ou ímpar.
// Descrição: Crie um programa que solicite um número ao usuário e informe se é par ou ímpar.

const question4 = document.getElementById("question4");

const answer4 = Number(prompt("Digite um número."));

if (answer4 % 2 == 0) {
    question4.innerHTML = `O número ${answer4} é par.`;
} else {
    question4.innerHTML = `O número ${answer4} é ímpar.`;
}

// answer4 % 2 == 0 ? `O número ${answer4} é par` : `O número ${answer4} é impar`;

// Problema: Converter uma nota em conceito.
// Descrição: Crie um programa que peça ao usuário para inserir uma nota de 0 a 100 e, em seguida, atribua um conceito (A entre 100 e 80, B entre 79 e 60, C entre 59 e 40, D entre 39 e 20 ou F abaixo de 20) com base na faixa de notas.

const question5 = document.getElementById("question5");

const answer5 = Number(prompt("Digite sua nota entre 0 a 100."));

let notaConceito;

if (answer5 >= 80) {
    notaConceito = 'A';
} else if (answer5 >= 60) {
    notaConceito = 'B';
} else if (answer5 >= 40) {
    
}
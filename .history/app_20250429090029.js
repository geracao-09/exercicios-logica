// Problema: Verifique se um número é positivo, negativo ou zero.
// Descrição: Escreva um programa que solicite ao usuário um número e, em seguida, informe se o número é positivo, negativo ou zero.

const question0 = document.getElementById("question0");

const answer0 = Number(prompt("Digite um numero."));

if (answer0 > 0) {
    question0.innerHTML =  `O número ${answer0} é positivo`;
} else if (answer0 < 0) {
    question0.innerHTML = `O número ${answer0} é negativo`;
} else {
    question0.innerHTML = "O número é zero"
}

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

const question2 
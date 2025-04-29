const question0 = document.getElementById("question0");

const answer0 = Number(prompt("Digite um numero."));

if (answer0 > 0) {
    question0.innerHTML =  `O número ${answer0} é positivo`;
} else if (answer0 < 0) {
    question0.innerHTML = `O número ${answer0} é negativo`;
} else {
    question0.innerHTML = "O número é zero"
}

const question1 = document.getElementById("question1");

const sideA = Number(prompt("Digite o primeiro lado."));
const sideB = Number(prompt("Digite o segundo lado."));
const sideC = Number(prompt("Digite o terceiro lado."));

if (sideA == sideB && sideA == sideC) {
    question1.innerHTML = "O triangulo é equilatero"
}
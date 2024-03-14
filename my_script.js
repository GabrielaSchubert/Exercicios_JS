// Exercício 2
var quantDias = parseInt(prompt("Digite a quantidade de dias:"));
var linksDia = 6;
var curtidasLink = 8;
var total = quantDias * linksDia * curtidasLink;
alert("Total de curtidas recebidas em " + quantDias + "dia(s):" + total);

// Exercício 6
var horasDia = parseInt(prompt("Digite quantas horas por dia ele pode jogar:"));
var horasMinimas = 78;
var diasCompletos = Math.ceil(horasMinimas/horasDia);
alert("É necessário " + diasCompletos + " dia(s) para completar o jogo");

// Exercício 1
var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
if (num1 > num2) {
    alert("O maior número é: " + num1);
}
else 
{
    alert("O maior número é: " + num2)
}

// Exercício 2
var valor = parseFloat(prompt("Digite um valor:"));
if (valor > 0) {
    alert("O valor é positivo");
}
else if (valor < 0) {
    alert("O valor é negativo");
}
else {
    alert("O valor é zero");
}

// Exercício 2
for (var i =1; i<=5; i++) {
    var num = parseInt(prompt("Digite o número:"));
    if (num % 2 == 0) {
        alert(num + " é um número par");
    }
    else {
        alert(num + " é um número ímpar");
    }
}

// Exercício 3
var somaPares = 0;
var somaImpares = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        somaPares +=i;
    }
    else {
        somaImpares +=i;
    }
}
alert("O resultado da soma dos números pares entre 1 e 100 é:" + somaPares);
alert("O resultado da soma dos números ímpares entre 1 e 100 é:" + somaImpares)

// Exercício 1/
function converterFahrenheit(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9
    return celsius;
}
var temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em fahrenheit:"));
var temperaturaCelsius = converterFahrenheit(temperaturaFahrenheit);
alert(temperaturaFahrenheit + "°F equivalem a: " + temperaturaCelsius.toFixed(2) + "°C");

// Exercício 3
function verificarAprovacao(nota1, nota2) {
    var notaMedia = (nota1 + nota2) / 2;

    if (notaMedia >= 6.0) {
        return "PARABÉNS! Você foi aprovado!";
    } else {
        return "Infelizmente, você foi reprovado.";
    }
}
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota"));
var mensagem = verificarAprovacao(nota1,nota2);
var notaMedia = (nota1 + nota2) / 2;
alert("A média semestral foi: " + notaMedia + "\n" + mensagem)

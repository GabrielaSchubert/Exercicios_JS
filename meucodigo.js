/* Exemplo de como informar algo á página */
let nome;
nome = prompt("Informe aqui o seu nome: ");
alert("Olá, " + nome);

/* Exemplo de como utilizar uma mensagem de confirmação para sair de uma página */
var sair = confirm("Você deseja sair da página atual e ir para o Google?");
if (sair == 1) {
  window.location = "https://www.google.com/";
}

import "./styles.css";

//let nota1 = parseFloat(prompt("Digite a Nota 1"));
//let nota2 = parseFloat(prompt("Digite a Nota 2"));
//let nota3 = parseFloat(prompt("Digite a Nota 3"));

let x = prompt("digite um valor ou 0 para sair");
while (x != 0) {
  if (x % 2 == 0) {
    document.write(`${x} é par<br>`);
  } else {
    document.write(`${x} é ímpar<br>`);
  }
  x = prompt("digite um valor ou zero para sair!");
}

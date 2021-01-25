let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);

//---------
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);

//---------
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let salary = parseFloat(valor2 * valor3).toFixed(2); // Digite aqui o calculo do salário
console.log("NUMBER = " + valor1);
console.log("SALARY = U$ " + salary);

//---------
var valores = [];
valores.push(parseInt(gets()));
valores.push(parseInt(gets()));
valores.push(parseInt(gets()));
valores.push(parseInt(gets()));
valores.push(parseInt(gets()));
valores.push(parseInt(gets()));
var cont = 0;
for (var i=0; i < 6; i++){
  if (valores[i] >= 0){ ++cont }
}

console.log(cont + " valores positivos");

//----------
var numero = parseInt(gets());

for (var i=1; i <= numero; i++){
  if (i % 2 == 0){ console.log(i) }
}

//----------
var valores = [];

pares = 0;
positivos = 0;
negativos = 0;

for (var i=0; i < 5; i++){
  valores.push(parseInt(gets()));
  if (valores[i] % 2 == 0){ ++pares; }
  if (valores[i] > 0){ ++positivos; }
  if (valores[i] < 0){ ++negativos; }
}

console.log(pares +' valor(es) par(es)');
console.log(valores.length-pares +' valor(es) impar(es)');
console.log(positivos +' valor(es) positivo(s)');
console.log(negativos +' valor(es) negativo(s)');

//---------Exercicio Contagem de Cédulas 4/5.
let valor = parseInt(gets());

console.log(valor);
let tipoNotas = [100, 50, 20, 10, 5, 2, 1];

function contarNotas(cedula) {
  let notas = 0;
  while (valor >= cedula) {
    valor -= cedula;
    notas++;
  }
  
  return console.log(`${notas} nota(s) de R$ ${cedula.toFixed(2).replace('.', ',')}`);
}
tipoNotas.forEach(nota => contarNotas(nota));
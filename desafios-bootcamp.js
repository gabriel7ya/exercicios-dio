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
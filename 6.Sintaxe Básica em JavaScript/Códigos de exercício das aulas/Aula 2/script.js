//Tipos primitivos

//Boolean
var VouF = false;
console.log(typeof(VouF));

//Number
var numeroX = 1;
console.log(typeof(numeroX));

//String
var nome = "Carol";
console.log(typeof(nome));

//Variáveis
var variavel;
console.log(variavel);
variavel = "Diana";
console.log(variavel);

let variavel2;
console.log(variavel2);
variavel2 = "Carolina";
console.log(variavel2);

const constante = "Diana";

// Escopos

var escopoGLobal = "Carol";
function escopoLocalTeste(){
    let escopoLocal = "Coutinho";
    console.log(escopoLocal);
}
console.log(escopoGLobal);
escopoLocalTeste();

//Operadores Lógicos
var e = true && false;
console.log(e);
var ou = true || false;
console.log(ou);
var nao = !true;
console.log(nao);
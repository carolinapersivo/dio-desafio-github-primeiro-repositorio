//Função declarativa
console.log('%cFunção declarativa', 'font-weight: bold')
function declarativa(a,b){
    console.log('O resultado da soma é:');
    console.log(a+b);
}
declarativa(1,2);
//Expressões de funções
console.log('%cExpressões de função', 'font-weight: bold');

var funcao = function expressao(){
    console.log('Função de expressão com nome');
}
funcao();
var funcao = function (){
    console.log('Função de expressão sem nome');
}
funcao();
//Arrow function
console.log('%cExpressões de seta', 'font-weight: bold');
var seta = () => {
    console.log('Função de seta');
}
seta();
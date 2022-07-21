function espaco(){
    console.log('   ');
}

console.log('%c Teste de métodos de array', 'font-weight: bold');
espaco();

console.log('%c Criar um array:', 'font-weight: bold');
let exemplo = ['string',1,true];
console.log(exemplo);

console.log('%c Chamar um índice:', 'font-weight: bold');
let array = ['string',1,true,['oi','eu'],[]];
console.log(array);
console.log(array[3]);
console.log(array[1]);

console.log('%c Listar o item e seu índice:', 'font-weight: bold');
array.forEach(function(item,index){console.log(item,index)});

console.log('%c Adicionar itens ao final:', 'font-weight: bold');
array.push('novo item',23);
console.log(array);

console.log('%c Remover item final:', 'font-weight: bold');
array.pop();
console.log(array);

console.log('%c Remover item inicial:', 'font-weight: bold');
array.shift();
console.log(array);

console.log('%c Adicionar itens ao início:', 'font-weight: bold');
array.unshift('item inicial');
console.log(array);

console.log('%c Pesquisar índice de um valor:', 'font-weight: bold');
console.log(array.indexOf(true));
console.log(array.indexOf(false)); // Quando der -1 significa que o item não existe no array

 //Pega o início da contagem e o total de valores a serem deletados
console.log('%c Deletar itens sequenciais do array:', 'font-weight: bold');
console.log(array.splice(2,3)); //O corte funciona mesmo dentro do console
console.log(array);

console.log('%c Retornar um conjunto de itens sequenciais (pode ser guardado em uma variável array):', 'font-weight: bold');
console.log(array.slice(0,1)) //Determina o início e o número de itens
console.log(array);

espaco();
console.log('%c OBJETO', 'font-weight: bold');

let objeto = {string:'string', number:1, boolean:true, array:['array'], objetoInterno:{objetoInterno:'objeto interno'}};
console.log(objeto);

console.log(objeto.array);
console.log(objeto.objetoInterno);
console.log(objeto.objetoInterno.objetoInterno);

var{string, boolean, objetoInterno} = objeto;
console.log(string,objetoInterno);
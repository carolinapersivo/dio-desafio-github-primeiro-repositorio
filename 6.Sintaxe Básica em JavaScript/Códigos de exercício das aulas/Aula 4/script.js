var jogador1 = 1;
var jogador2 = 2;
var placar;

//IF TERNÁRIO
jogador1 >= 0 && jogador2 >= 0 ? console.log('Jogadores válidos'):console.log('Jogadores inválidos');

// NINHO DE IF
if (jogador1 > 0){
    if (jogador2 > 0) {
        console.log('Os dois marcaram pontos!');
    } else {
        console.log('Apenas o jogador 1 marcou ponto!');
    }
} else{
    if (jogador2 > 0){
        console.log('Apenas o jogador 2 marcou ponto!');
    } else {
        console('Ninguém marcou ponto!')
    }
}
 
if (jogador1 > jogador2){
    placar = jogador1 > jogador2;
} else if (jogador2 > jogador1){
    placar = jogador2 > jogador1;
} else{
    placar = jogador2 == jogador1;
}

//SWITCH/CASE
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1  ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!');
        break;
    default:
        console.log('empatou!')
}

//FOR
var array = ['valor1', 'valor2','valor3','valor4','valor5'];
let object = {propriedade1:'valor1',propriedade2:'valor2',propriedade3:'valor3',propriedade4:'valor4'};

for(let indice=0; indice<array.length; indice++){
    console.log(indice);
}
//FOR/IN
for (i in object){
    console.log(i);
}
//FOR/OF
for (i of array){
    console.log(i);
}
for (i of object.propriedade1){
    console.log(i);
}
//WHILE
var a = 0;
while (a < 10){
    a++;
    console.log(a);
}
//DO/WHILE
var a = 0;
do{
    a++;
    console.log(a);
} while (a<10);
//Solução 1

/*function testPalindromo(){
    let word = prompt('Digite a palavra');
    let wordReverse = word1.split("").reverse().join("");

    if(!word){
        alert('Algo está errado!')
        return;
    }
    if(wordReverse === word){
        alert('Achamos um palíndromo!');
    } else {
        alert('Não é palíndromo');
    }

    let verificacao = prompt('Testar outra palavra? \n1 - Sim \n2 - Não');
    if(verificacao === 1){
        testPalindromo();
    } else{
        alert('Até a próxima');
    }
}
testPalindromo();*/

//Solução 2
function testPalindromo(){
    let word = prompt('Digite a palavra');
    if(!word){
        alert('Algo está errado!')
        return;
    }
    for(let i = 0;  i < word.length/2; i++){
        if(word[i] !== word[word.length - 1 - i]){
            alert('Não é palíndromo');
            return false;
        }
    }
    alert('Achamos um palíndromo!');
}
testPalindromo();







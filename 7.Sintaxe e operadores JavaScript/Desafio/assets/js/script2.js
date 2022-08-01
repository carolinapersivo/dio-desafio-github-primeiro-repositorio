function criaPrimeiraFrase (num1,num2){
    let saoIguais;
    if (num1 != num2){
        saoIguais = "não ";
    }
    return `Os números ${num1} e ${num2} ${saoIguais}são iguais.`
}

function criaSegundaFrase (num1,num2){
    const soma = num1 + num2;
    let resultado10 = "menor ou igual";
    let resultado20 = "menor ou igual";
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    
    if (compara10){
        resultado10 = "maior";
    }
    if (compara20){
        resultado20 = "maior";
    }
    
    return ` Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}
function comparaNumeros(num1,num2){
    const primeiraFrase = criaPrimeiraFrase (num1,num2);
    const segundaFrase = criaSegundaFrase (num1,num2);
    return `${primeiraFrase}${segundaFrase}`;
}
var num1 = Number(prompt("Digite o primeiro número"));
var num2 = Number(prompt("Digite o segundo número"));

x = comparaNumeros(num1,num2);
alert(x);

//Outras formas de comparação

// if (saoIguais){
    //     return "São iguais"; //O return para a função nesse momento
    // }
    // return "Não são iguais";
    
    // return saoIguais ? "São iguais" : "Não são iguais";
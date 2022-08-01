
// function comparacao(a,b){
//     if(a == b){
//         console.log(`Os números ${a} e ${b} são iguais`)
//     }else{
//         console.log(`Os números ${a} e ${b} não são iguais`)
//     }
//     var soma = a + b;
//     if(soma > 10){

//     }
// }

function comparacao(){
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let comp1;
    let comp2;
    let comp3;
    let soma = num1 + num2;
    if (num1==num2){
        comp1 = `Os números ${num1} e ${num2} são iguais.`;
    } else{
        comp1 = `Os números ${num1} e ${num2} não são iguais.`;
    }
    if (soma > 10){
        comp2 = "maior que 10";
    } else if (soma == 10){
        comp2 = "igual a 10";
    } else{
        comp2 = "menor que 10";
    }
    if (soma > 20){
        comp3 = "maior que 20";
    } else if (soma == 20){
        comp3 = "igual a 20";
    } else{
        comp3 = "menor que 20";
    }
    alert(`${comp1} Sua soma é ${soma}, que é ${comp2} e ${comp3}.`);
}
comparacao();
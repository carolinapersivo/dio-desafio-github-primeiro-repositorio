function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    console.log(operacao);
    if(!operacao || operacao >=7){
        alert('Insira um valor válido!');
        calculadora();
    } else{
        let n1 = Number(prompt('Insira o primeiro número:'));
        let n2 = Number(prompt('Insira o segundo número:'));
        let resultado;

        if(!n1 || !n2){
            alert('Insira valores numéricos!')
            calculadora();
        } else{
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?:\n 1 - Sim\n 2 - Não');
                if(opcao == 1){
                    calculadora();
                } else if(opcao == 2){
                    alert('Até mais!')
                } else{
                    alert('Digite uma opção válida');
                    novaOperacao();
                }
            }
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} é: ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            
            // if (operacao == 1){
            // soma();
            // } else if(operacao == 2){
            //     subtracao();
            // }else if(operacao == 3){
            //     multiplicacao();
            // } else if(operacao == 4){
            //     divReal();
            // } else if(operacao == 5){
            //     divInteira();
            // } else if(operacao == 6){
            //     potenciacao();
            // }

            switch (operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divReal();
                    break;
                case 5:
                    divInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
                
            }
        }
        
    }
}
calculadora();

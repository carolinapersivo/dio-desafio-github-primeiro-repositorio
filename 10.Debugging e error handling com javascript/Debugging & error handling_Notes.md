# Debugging & Error Handling

### Tipos de erros (ou exceções)

- **Error (ECMAScript)**: Erros que ocorrem em tempo de execução

  ![image-20220807213744636](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807213744636.png)

- **DOMException**: Relacionados a uma página web (Document Object Model)

  ![image-20220807213846447](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807213846447.png)

### Tratando erros

#### Throw

- No exemplo de cima o código apresenta a invalidez por meio de um resultado em string. No exemplo de baixo, com o uso do **throw**, é apresentado um erro com o nome determinado.

  ![image-20220807214048411](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807214048411.png)

#### Try/Catch

- Conjunto de comandos onde é realizada uma tentativa (**try**) de rodar a função, e caso a execução gere um erro (**e**), o **catch** "captura" o enunciado e pode ser manipulado (ex: impresso no console).

  ![image-20220807214418585](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807214418585.png)

> É possível utilizar um throw dentro do catch (dessa forma fica salvo nas estatísticas a presença de um erro no código)
>
> ![image-20220807214809947](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807214809947.png)

#### Try/Catch/Finally

- Instrução a ser executada independente de existir um erro ou não.

  - Com erro:

    ![image-20220807214929559](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807214929559.png)

  - Sem erro:

    ![image-20220807215115065](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807215115065.png)

### O objeto Error

- O objeto Error aceita os parâmentros: <ins>message, fileName e lineNumber</ins>> (fileName e lineNumber não são padrão!)

  ![image-20220807215306476](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807215306476.png)

- O erro pode ter nome (substitui o nome Error)

  ![image-20220807215454594](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807215454594.png)



## Atividade Prática

### Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

## Links Auxiliares

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)

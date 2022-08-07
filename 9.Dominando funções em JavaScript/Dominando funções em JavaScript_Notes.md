# Dominando funções em JavaScript

### Tipos de função

- **Definição comum**:

  - ```js
    function nome(parametros){
        //instruções
    }
    ```

  - O return pausa a função executada

    ```js
    function nome(parametros){
        //instruções
        return;
    }
    ```

- **Função anônima**: armazenada em uma variável

  - ```js
    const soma = function (a,b){
        return a + b;
    }
    soma(1,2) //3
    soma(5,4) //9
    ```

- **Função autoinvocável (IIFE)**: função anônima (ou não) entre parênteses seguida de um parênteses que representa sua chamada

  - ```js
    (
        function(){
            let name = "DIO";
            return name;
        }
    )();
    // DIO
    ```

  - Pode receber parâmetros:

    ```js
    (
        function(a,b){
            return a + b;
        }
    )(1,2);
    //3
    ```

  - Pode ser armazenada em uma variável:

    ```js
    const soma3 = (
        function(a,b){
            return a + b;
        }
    )(1,2);
    console.log(soma3);
    //3
    ```

- **Callbacks**: função passada como argumento para outra função:

  ```js
  const calc = function(operacao, num1, num2){
      return operacao(num1,num2);
  }
  const soma = function(num1,num2){
      return num1 + num2;
  }
  const sub = function(num1, num2){
      return num1 - num2;
  }
  const resultSoma = calc(soma, 1, 2);
  const resultSub = calc(sub, 1, 2);
  
  console.log(resultSub);
  console.log(resultSoma);
  ```


### Parâmetros

#### Valores padrão: 

Possibilidade de determinar um _default_ para o caso do parâmetro não ser determinado.

![image-20220806220646577](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806220646577.png)

#### Objeto "arguments":

Um array com todos os parâmetros passados quando a função foi invocada.

<img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806221045156.png" width="400">

#### Arrays

- Spread = (...<variável>): uma forma de lidar separadamente com elementos de um array. Utilizado na **chamada da função**.

<img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806221450849.png" width="300">

- Rest = (...args): combina os argumentos em um array. Utilizado na **declaração da função**.

  <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806222423632.png" width="300">

#### Objetos

- Object destructuring: Entres as chaves, podemos filtrar apenas os valores que nos interessam.

  <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806222743453.png" width="450">

### Loops

#### If, Else

- É possível salvar uma comparação/validação dentro de uma variável (figura 2), para facilitar o entendimento do código.
- Nem sempre é necessário utilizar o else (salva memória).

![image-20220806224919287](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806224919287.png)

- É possível aninhar Ifs

  ![image-20220806225155919](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806225155919.png)

  > Não tem "elseif". O termo é utilizado com espaço.

#### Switch/case

- Equivale a comparação de tipo e valor (===)

- Precisa sempre de um default

- Bom para comparar muitos valores

  <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806225420465.png" width="200">

#### For

Loop dentro de elementos iteráveis (ex.: arrays, strings, objetos).

<img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220806232514004.png" width="320">

- **For..in**: loop entre propriedades enumeráveis de um objeto

  ![image-20220807000848837](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807000848837.png)

- **For..of**: loop entre estruturas iteráveis como arrays e strings.

  ![image-20220807001033467](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807001033467.png)

#### While

Executa instruções até que a condição se torne falsa.

<img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807001923233.png" width="270">

- **Do/While**: Executa instruções até que a condição se torne falsa. Porém, **a primeira execução sempre ocorre**.

  ![image-20220807001736344](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807001736344.png)

### This

A <ins>palavra reservada</ins> **this** é uma referência de contexto.

- Quando se usa **this** dentro de um método, ele refere-se ao objeto pai desse método (pessoa):

  <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807141222743.png" width="430">

  > Quando a função está dentro de um objeto ela é chamada de método.

![image-20220807141607197](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807141607197.png)

> Ex: ![image-20220807141737232](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807141737232.png)
>
> ![image-20220807141849029](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807141849029.png)
>
> ![image-20220807141925748](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807141925748.png)

#### Manipulando seu valor

- **Call**: 

  - Ex 1:

    ![image-20220807142056376](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807142056376.png)

  - Ex 2: Possível passar parâmetros adicionais, separados por vírgula do objeto chamado

    ![image-20220807142202059](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807142202059.png)

- **Apply**:

  - Ex 1: semelhante ao call

    ![image-20220807142426032](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807142426032.png)

  - Ex 2: Argumentos devem ser passados dentro de um array

    ![image-20220807142455864](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807142455864.png)

- **Bind**: Consigo armazenar em uma constante a função, clonada, com o valor do objeto ao qual o this se refere

  - Ex 1:![image-20220807142607580](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807142607580.png)

### Arrow functions

- **Sintaxe**:

  ![image-20220807143134079](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807143134079.png)

  - Quando a função possui uma linha apenas, não é necessário escrever o <ins>return</ins> dentro dos parênteses.

  - Caso exista apenas um parâmetro, pode-se dispensar os parênteses.

    <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220807143424574.png" width="200" align="left">

  - Arrow Function **não faz hoisting**.

  > Na arrow function **this** será sempre o objeto global.
  >
  > Não existe o objeto arguments.
  >
  > O construtur (ex: newObject())também não pode ser utilizado

## Atividade Prática

### Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

### Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade;
}
```


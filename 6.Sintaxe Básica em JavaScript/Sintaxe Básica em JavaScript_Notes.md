# Sintaxe Básica em JavaScript

> Profª: Diana Martine

- Linguagem de programação de alto nível que integra o desenvolvimento de apps e páginas web.

- Cria scripts dinâmicos que realizam a interação de apps e páginas web (uso mais comum)

#### Tipagem

- JavaScript possui tipagem fraca, logo a declaração de dados ocorre de forma dinâmica

  > Quanto mais forte a tipagem, mais obrigatória a declaração

- Possui autonomia para classificar as declarações de variável no tipo primitivo que faça mais sentido

##### Tipos primitivos

- Boolean, null, undefined, Number, String, Array, Object, Function

### Declaração de variáveis

- var - escopo global e local
  - Pode ter seu valor alterado e se não tiver valor inicial é tratada como null
- let - escopo local de bloco
  - Pode ter seu valor alterado e se não tiver valor inicial é tratada como null
- const - escopo local de bloco
  - Somente leitura, valor inicial é obrigatório e não pode ser alterado

#### Escopo de declaração

- Global - na declaração fora de bloco, a visibilidade fica disponível em todo o código
- Local - na declaração dentro do bloco, a visibilidade pode ou não ficar disponível no resto do código

##### Regras

- Iniciar com letras, underline ou cifrão (não iniciar com numero)
- Utilizar underline ou maiúsculas ao invés de espaços
- Não utuilizar palavras reservadas
- Declarar variáveis no topo do bloco de código

#### Atribuição x comparação x comparação idêntica

- Sinal " = " é um sinal de atribuição
- Comparação utilizar "==" para validar a igualdade de valores (pode ser True uma comparação entre a String "0" e o Number 0)
- Comparação idêntica é feita através de "===" e compara não apenas o valor das variável, mas também os tipos (a comparação de String com Number irá retornar valores falsos)

### Operadores aritméticos relacionais e lógicos

#### Operadores aritméticos

- Adição (+), Subtração (-), Multiplicação (*), Divisão real (/), Divisão inteira (%, é o resto da divisão), Potenciação (**)
- Maior que (>), Menor que (<), Maior ou igual à (>=), Menor ou igual à ( <=)

#### Operadores lógicos

- E (&&) - todos os valores são True
- OU (||) - qualquer dos valores é True
- Não (!) - inverte o valor de True para False e vice-versa

### Vetores/Arrays

- Array - lista ou matriz de variáveis com organização por índice

- Pode incluir diferentes tipos de variável:

  - ```js
    //Exemplos
    let array = ['string',1, true];
    
    //É possível ter um array dentro de outro array
    let array = [['string',1],true,false,['outro']]
    
    ```

#### Manipulando arrays (métodos)

- forEach() - itera um array
- push() - adiciona um item ao final do array
- pop() - remove item no final do array
- shift() - remove item no início do array 
- unshift() - adiciona um item ao início do array
- indexOf() - retorna o índice de um valor
- splice() - remove ou substitui um item pelo índice
- slice() - retorna uma parte do array 

### Objetos

- Dados que possuem propriedades e valores que definem suas características. Devem ser declarados entre chaves.

  - ```js
    var xicara = {
        cor:'azul',
        tamanho:'p',
        funcao:tomarCafe()
    }
    ```

#### Manipulando objetos

- As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto = **desestruturação**

  - ```js
    var xicara = {cor:'azul',tamanho:'p',funcao:tomarCafe()};
    
    var cor = xicara.cor;
    var tamanho = xicara.tamanho;
    var funcao = tomarCafe();
    
    //ou
    
    var {cor,tamanho, funcao} = xicara;
    ```
    

### Estruturas Condicionais

- Instruções para realizar determinadas tarefas a partir de uma condição (decisão ou repetição)

#### IF

- ```js
  if (jogador1 != -1){
      if (jogador1 > 0) {
          console.log('jogador 1 marcou ponto!');
      } else if (jogador2 > 0) {
          console.log('jogador 2 marcou ponto!');
      } else{
          console.log('ninguém marcou ponto');
      }
  } 
  //ninho de IF
  ```

##### If ternário

- ```js
  jogador1 > 0 ? console.log('Marcou ponto'):console.log('Não marcou ponto');
  ```

#### Switch/case

- ```js
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
  ```

### Estruturas de repetição

- For,   For/in,   For/of,   While,   Do/while

  - For: repetição até a condição ser falsa:

    ```js
    var array = ['valor1', 'valor2','valor3','valor4'];
    
    for(let i=0; i<array.length; i++){
        console.log(i);
    }
    ```

  - For/in: repetição a partir de uma propriedade:

    ```js
    var array = ['valor1', 'valor2','valor3','valor4'];
    
    for (i in array){
        console.log(i);
    }
    ```

  - For/of: repetição a partir de um valor

    ```js
    var array = ['valor1', 'valor2','valor3','valor4'];
    
    for (i of array){
        console.log(i);
    }
    ```

    > Não funciona com objetos pois as propriedades variam, diferente do índice em um array que sempre serão números inteiros.
    >
    > Podemos forçar um:
    >
    > ```js
    > for (i of object.propriedade){
    >     console.log(i);
    > }
    > ```
    >
    > Cada caractere dentro do valor será  impresso em linhas separadas

  - While: executa instrução enquanto condição for verdadeira, sendo a verificação feita antes da execução:

    ```js
    var a = 0;
    while (a < 10){
        a++;
        console.log(a);
    }
    ```

  - Do/while: executa instrução até que determinada condição seja falsa, sendo a verificação feita depois da execução:

    ```js
    var a = 0;
    do{
        a++;
        console.log(a);
    } while (a<10);
    ```


### Funções

- Blocos de comando e instruções para a execução de tarefas

  - ```js
    function nomeDaFuncao(){
        ${instrucao};
    }
    nomeDaFuncao();
    ```

    - {} - bloco de instrução

    - () - Objeto do tipo function

      > Podemos declarar parâmetros dentro dos parênteses, que servem de variáveis, onde sua atribuição  pode ser feita durante a chamada da função. 

#### Funções declarativas

- São as mais comuns, declaradas com a palavra reservada function, seguida de um nome de função (obrigatório), parênteses e chaves.

#### Funções de expressão

- Funções atribuídas à expressões. A nomeação da função é opcional.

  ```js
  var funcao = function (){
      console.log('Função de expressão sem nome');
  }
  funcao();
  ```

  

#### Arrow function

- Funções de expressão de sintaxe curta. São sempre anônimas e portanto não podem ser nomeadas.

  - Declaradas por parênteses, seguidos por **=>** e depois de chaves

    ```js
    var funcao = () => {
        ${instrucao};
    }
    ```

    
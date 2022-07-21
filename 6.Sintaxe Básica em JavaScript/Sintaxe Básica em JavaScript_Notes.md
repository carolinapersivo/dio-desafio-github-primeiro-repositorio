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
    
    
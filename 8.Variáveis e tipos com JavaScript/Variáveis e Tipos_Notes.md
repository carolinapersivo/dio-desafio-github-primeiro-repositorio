# Variáveis e tipos JavaScript

## Atribuindo Valores

![camelCase](C:\Users\carol\Downloads\camelCase.png)

- Tipo de case type mais popular no JavaScript é o Camel Case.
- Upper Case Snake utilizado em constantes

### Var e Let e const

![image-20220731220137155](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220731220137155.png)

#### Var

- escopo global (ignora o bloco a menos que ele seja uma função)

- pode ser redeclarada e reatribuída

  > Considera-se que um bloco é qualquer trecho delimitado por chaves

#### let **(mais indicada)**

- escopo local, se dentro de bloco if
  - escopo global se fora de um bloco
- não pode ser redeclarada, mas pode ser reatribuída

```js
var firstName = "João";
var lastName = "Souza";
console.log(firstName,lastName);
// Deve imprimir JoãoSouza

if (firstName === "João"){
    let lastName = "Rodrigues"
    var firstName = "Pedro";
    // Deve imprimir PedroRodrigues
    lastName = "Silva";  //Não podemos redeclarar com let
    console.log(firstName,lastName);
    // Deve imprimir PedroSilva
}

console.log(firstName,lastName);
// Deve imprimir PedroSouza

```

##### Hoisting

- Atribuir valores à uma variável antes de declarar ela.

  - Não pode ser feito com let

  ```js
  numberOne = 1;
  console.log(numberOne + 2);
  var numberOne;
  ```

#### Const

- Escopo de bloco e não faz hoisting
- Não é possível redeclarar ou reatribuir a constante

## Tipos de dados

- Javascript é uma linguagem de tipagem dinâmica
  - Não é preciso identificar o tipo da variável ao declarar
  - É possível modificar o tipo da variável

![image-20220731220600470](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220731220600470.png)

- **Tipos**: Primitivos e compostos
  - Primitivos não possuem métodos dentro deles

#### Strings

> Ver: JavaScript Escapes

- **Métodos**: concat, split, startsWith, endsWith, includes, lenght, slice, replace, etc...

> Contar palavras em uma frase: variavel.split(" ")

#### Numbers

- Math = biblioteca interna do JS (é um objeto)

  - ```js
    Math.PI
    //Retorna o valor de PI
    Math.floor(variavel) //arredonda para baixo
    Math.ceil(variavel) //arredonda para cima
    ```

#### Booleanos

- True ou False

- Pode ser declarada através de uma comparação

  - ```js
    let validation = 3 === 0;
    // validation = False
    let validation = 0 === 0;
    // validation = True
    ```

#### Arrays

- Lista iterável de elementos

- Index começa no 0

- Pode ser inicializado vazio 

  ```js
  let array = []
  array.push(3) //adiciona um elemento no final, fica [3]
  array.pop() //remove o elemento final do array fica[]
  array.push3) //array fica [3]
  array.push(2) //array fica [3,2]
  array.push(5) //array fica [3,2,5]
  array.shift() //remove o elemento inicial, fica [2,5]
  array.unshift(1) //adiciona elemento no início, fica [1,2,5]
  
  for(let i = 0; i < array.length; i++){
      console.log(array[i]); //imprime cada item do array
  }
  array.includes(3)//False
  array.every(item => item === 5) //False
  array.som(item => item === 5) //True
  ```

#### Objects

![image-20220801002234389](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220801002234389.png)

- Estrutura tipo "chave-valor"

  ```js
  let obj = {};
  obj.name = "Julia"; // obj = {name:"Julia"}
  obj.age = 20; //obj = {name:"Julia",age:20}
  ```

- Biblioteca Object

  ```js
  Object.values(obj);//["Julia", 20]
  Object.keys(obj);//["name", "age"]
  ```

- Acessar valores:

  ```js
  let person = {
      name:"Julia",
      age: 20,
      adress: "Rua 2"
  };
  person.name;//"Julia"
  //ou
  person["name"]; //"Julia"
  person[numberOfSiblings] = 3; //essa forma permite utilizar valores de variáveis
  let mom = nameOfMom;
  person[mom] = "Maria"; 
  ```

#### Empty, undefined e null

![image-20220801003432242](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220801003432242.png)

- **Empty**: variável é inicializada de forma vazia
  - Ex: let nomeVariavel = [];
- **Null**: foi declarado mas não é inicializado, com a intenção de ser False (falsy value)
- **Undefined**: não foi declarado, não existe

```js
typeof abacaxi;//retorna "undefined" pois a variavel não foi declarada ou inicializada
let abacaxi;//undefined, falta atribuir valor

let abacaxi = "";  //a variável agora é empty
typeof abacaxi; //String

abacaxi = null;
typeof abacaxi; //Object
```

- !false = !undefined = !null = true

## Atividade Prática




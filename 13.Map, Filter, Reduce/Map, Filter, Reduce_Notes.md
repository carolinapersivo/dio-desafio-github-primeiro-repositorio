# Map, Filter e Reduce

- Métodos para tratar listas (arrays)

## Map

- Cria um novo array, sem modificar o array original. Realizando operações em ordem.
  - <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815194953511.png" width="300" align="left">

#### Sintaxe

- Callback: função a ser executada em cada elemento
- thisArg (opcional): valor de 'this' dentro da função callback
  - ![image-20220815195139597](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815195139597.png)

#### Map x forEach

- O `forEach` exige que a operação seja salva em uma constante

  - Exemplo com arrow function:

    ![image-20220815195322108](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815195322108.png)

## Filter

- Filtra elementos do array para que os elementos atendam a certa condição.

- Não modifica array original

- Mesma estrutura do map, sendo o callback geralmente uma comparação (no exemplo utiliza o comando `includes`)

  - <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815195851410.png" width="300" align="left">

    ![image-20220815195941218](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815195941218.png)

## Reduce

Executa uma função em todos os elementos do array, retornando um valor único (ex: somar todos os elementos de um array)

<img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815200326616.png" width="400" align="left">

- **Callback** = função a ser executada a partir do acumulador

  - `Accumulator/prevValue`: acumulador de todas as chamas de callbackFn

  - `currentValue`: elemento atual sendo acessado pela função

    <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815200517607.png" width="600" align="left">

- **initialValue** = valor sobre o qual o retorno final irá atuar

  

Exemplo:


# Objetos Map e Sets (coleções chaveadas)

## Maps

- Coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop for..of
  - <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815142343659.png" align="left" width="300">

#### Métodos

- **Adicionar, ler e deletar**:
  - Set: determina chave e valor
  - Get: checa o valor de determinada chave 
  - Delete: deleta chave da coleção

<img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815142550542.png" width="350" align="left">

#### Map x objeto

- Maps podem ter chaves de qualquer tipo (no objeto a chave é sempre no formato <ins>string</ins>)
- Maps possuem a propriedade <ins>length</ins>
- Maps são mais fáceis de iterar (por ter length)
- Utilizado quando o valor das chaves é desconhecido
- Valores tem o mesmo tipo

## Sets

- Estruturas que armazenam valores únicos (no array é possível ter valores repetidos)
  - <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815143118323.png" width = 400 align="left">

#### Métodos

- Adicionar, consultar e deletar

  - Add: adiciona um valor

  - Has: confere se o valor existe no set

  - Delete: deleta valor do set

    <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220815143239053.png" width="300" align="left">

#### Sets x Arrays

- Sets possuem valores únicos
- Em vez da propriedade length, o tamanho de um set é consultado pela propriedade size
- Não possui os métodos map, filter, reduce, etc. (array é mais flexível)

## Atividade Prática

### Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usuários que são administradores.

### Atividade 2: Sets

Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.


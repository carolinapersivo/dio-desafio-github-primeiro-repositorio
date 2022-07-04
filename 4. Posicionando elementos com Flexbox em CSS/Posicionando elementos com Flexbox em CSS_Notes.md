# Anotações do curso: Posicionando elementos com Flexbox em CSS



## Estrutura

- Modelo de layout unidimensional que tem como **objetivo** oferecer distribuição de espaço entre itens e recursos de alinhamento

### Flex Container x Flex Item

- **Flex Container**: é a tag que envolve os itens
  - A propriedade "display: flex" transforma seus itens filhos em flex itens.
  - Pode ser feita em qualquer tipo de tag (ex.: div, span, h1, h2, a, etc.)

##### Propriedade relacionadas:

_display_: inicializador do container

_flex-direction_: direciona os itens em linhas ou colunas

_flex-wrap_: quebra de linha

_flex-flow_: abreviação pro direction e wrap

_justify-content_: alinha itens do container de acordo com sua direção

_align-items_: alinha itens de acordo com o eixo do container

_align-content_: alinha as linhas do container



- **Flex Item**: Elementos filho do flex container, que podem se tornar containers (cascata).

##### Propriedade relacionadas:

_flex-grow_: define fator de crescimento

_flex-basis_: define tamanho inicial do item antes da distribuição do espaço restante dentro do container

_flex-shrink_: define capacidade de redução

_flex_: abreviação das 3 propriedades acima

_order_: define ordem de distribuição e listagem dos itens

_align-self_: define o alinhamento de um item específico do conteúdo



## Fundamentos

### display-flex

1. Criamos na <ins>head</ins> duas classes:

   ```html
   <style>
       .flex {
           max-width: 300px;
           padding: 10px;
           border: 2px solid black;
       }
       .item {
           background-color: aqua;
           margin: 5px;
       }
   </style>
   ```

2. No <ins>body</ins> criamos uma div, com 3 divs internas, todas com class="item"

   ```html
   <body>
       <div class="flex">
           <div class="item">Item 1</div>
           <div class="item">Item 2</div>
           <div class="item">Item 3</div>
       </div>    
   </body>
   ```

   Com a extensão Live Server Preview temos uma pré-visualização do tipo:

   ![image-20220702232237595](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220702232237595.png)

3. Adicionamos então uma linha na classe flex inicializando o container:

   ```html
   .flex {
   	max-width: 300px;
   	padding: 10px;
   	border: 2px solid black;
   	display: flex;
   }
   ```

   E a pré-visualização torna-se:

   ![image-20220702232528951](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220702232528951.png) 

   > Se fossem utilizados muitos divs, os itens filhos começariam a "vazar" do container.

### flex-direction

- Estabelece o eixo principal do container
  - Comportamento padrão do flex container = orientação horizontal (linha) ao invés de vertical (coluna)
- Eixos:
  - **row (padrão):** esquerda :arrow_right: direita
  - **row-reverse:** direita :arrow_right: esquerda
  - **column:** cima :arrow_right: baixo
  - **column-reverse:** baixo :arrow_right: cima

### flex-wrap


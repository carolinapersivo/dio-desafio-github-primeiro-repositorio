# Anotações do curso: Introdução à criação de websites com HTML5 e CSS3

### Introdução ao cursos de HTML

##### Estrutura básica

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Carolina Persivo</title>        
    </head>
    <body>
        Carolina Persivo
    </body>
</html>
```

##### Semântica (antes utilizava-se <div> para tudo)

- Section
- Header
- Article
- Aside
- Footer
- h1...h6

```html
<!– Nova estrutura com o uso das flags semânticas –>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Carolina Persivo</title>        
    </head>
    <body>
        <header>
            <h1>Carolina Persivo</h1>
        </header>
        <section>
            <header>
                <h2>Posts</h2>
            </header>
            <article>
                <header>
                    <h3>Post #1</h3>
                </header>
            </article>
        </section>
        <footer>"Aqui vai ficar a lista de contatos"</footer>
    </body>
</html>
```

### Como usar textos e links em HTML

Headers: <h1>, <h2>, <h3>, <h4>, <h5> e <h6>

Parágrafos: <p> (pode incluir imagens e outros objetos)

Links (âncora): <a>

- Atributos: **href** e **target** (diz como o link será aberto, target="_blank" abre o link em outra guia)

> <a href="www.google.com"> Acesse o google</a>
>
> <a href="mailto:carol_coutinhoo@hotmail.com">Meu email</a>

Imagens: <img>

- Atributos: **src** (insere a imagem através de caminho) e **alt **(insere texto alternativo para programas de leitura e erros de carregamento)

Listas: <ul> e <ol>

- Não ordenada <ul>: A ordem dos itens não é importantes
- Ordenada <ol>: A ordem dos itens é importantes
- Itens da lista: <li>

### Introdução e conceitos básicos do CSS3

**Seletores** = elementos HTML

**Declarações** = atribui propriedades aos seletores (ex.: cores, tamanho, alinhamento, etc.)

- Formado por uma propriedade e um valor

#### ID x Classe

Representam qualquer tipo de elementos (ao contrário dos seletores, que são específicos) e as diferenças entre eles

```html
<header id="header" class="header"></header>

<header class="header"></header>
```

- **Classe**: precedida por um ponto
  - Pode ser utilizada várias vezes

```css
.header {
	padding: 10px;
}
```

- **Id**: precedido por uma hashtag
  - Só pode ser usado uma vez por página

```
#header {
	padding: 15px;
}
```

Cada elemento HTML é representado pelo CSS como uma caixa retangular, o chamado **box model**

![image-20220629132226016](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220629132226016.png)

- **Margin**: Espaçamento entre elementos (_content_)
- **Border**: Circundam o conteúdo, podemos alterar a aparência delas
- **Padding**: Espaçamento entre a borda e o conteúdo

### Estilizando elementos

##### Padding

Padding diferente para cada lado

- Ordem = eixo y (inferior/superior) eixo x (esquerdo/direito)

  ```css
  .post{
  	padding: 10px 5px;
  }
  ```

- Ordem = superior direita inferior esquerda

  ```css
  .post{
  	padding: 15px 10px 5px 0;
  }
  ```

  ou

  ```css
  .post{
  	padding-top: 15px;
  	padding-right: 10px;
  	padding-bottom: 5px;
  	padding-left: 0;
  }
  ```

##### Background

- Cores, imagem e posicionamento:

  ```css
  .post{
  	background-color: green;
  	background-image: url("bg.png");
  	background-position: top;
  }
  ```

  - Modos de mudar as cores:

  ```css
  .post{
  	background-color: green;
  	background-color: #008800;
  	background: #008800;
  }
  ```

##### Border

Largura, cor, estilo:

```css
.post{
	border: 3px solid blue;
	border-top: 2px dotted green;
	border-right: 4px dashed pink;
}
```

> Nesse caso a primeira linha determina o estilo para todos os lados, e depois alteramos separadamente a borda superior e direita.

ou mais específico

```css
.post{
	border-width: 3px;
	border-color: #505050;
	border-style: solid;
}
```

ou AINDA MAIS específico

```css
.post{
	border-top-width: 3px;
	border-top-color: blue;
	border-top-style: solid;
}
```

##### Raio da borda (cantinhos)

Em px ou %:

```css
.post{
	border-radius: 10px;
	border-radius: 50%;
	border-radius: 10% 20%;
	border-radius: 10% 20% 15% 22%;
}
```

Ou específico para os eixos y (superior/inferior) e x (esquerda/direita):

```css
.post{
	border-radius: 10% 20%;
}
```

Ou específico na ordem: superior, direita, inferior, esquerda:

```css
.post{
	border-radius: 10% 20% 15% 22%;
}
```

> Um border-radius de 50% transforma um elemento quadrado em um círculo

### Estilizando textos

##### Família de fontes

> Existem algumas web-safe-fonts, que se encontram na maioria dos dispositivos. Mas é possível utilizar fontes do computador ou da web.

```css
#title{
	font-family: Verdana;
}
.post_title{
	font-family: Verdana, Arial;
}
```

> É possível adicionar duas fontes no código, para caso uma não funcione haja outra de backup.

##### Tamanho da fonte

```css
.post_title{
	font-size: 18px;
}
```

##### Estilo da fonte

```css
#title{
    font-style: normal;
}

.subtitle{
    font-style: italic;
}
```

> Se a fonte não tiver suporte ao itálico o navegador pode tentar forçar a inclinação e distorcer o texto

- Font-weight: altera o "peso"

  ```css
  .subtitle{
      font-weight: bold;
  }
  ```

> Algumas fontes mais complexas possuem vários pesos, tornando necessário utilizar valores numéricos além dos termos normal/bold

##### Transformar o texto

- Maiúsculas, minúsculas e capitalização

  ```css
  #title{
      text-transform: uppercase;
  }
  .subtitle{
      text-transform: lowercase;
  }
  .post_title{
      text-transform: capitalize;
  }
  ```

##### Decorar o texto (linhas)

```css
#title{
    text-decoration: underline;
}
.subtitle{
    text-decoration: overline;
}
.post_title{
    text-decoration: line-through;
}
```

### Estilizando listas

Existem opções diferentes para listas ordenadas e não ordenadas

```css
ul {
    list-style-type: square;
}
ol {
    list-style-type: upper-roman;
}
ul{
    list-style-type: "\1F44D"
}
```

> O terceiro exemplo altera o círculo para um símbolo, nesse caso o emoticon :+1:

> list-style-type: none;     remove os marcadores

##### Imagens como marcadores

```css
ul {
list-style-image: url("rocket.png")
}
```

> O CSS é uma linguagem em cascata, então e possível chamar um elemento dentro de uma classe da forma:

```css
.contacts li a {
    color: blue;
}
```

### Dimensão e alinhamento

- Largura (width) e altura (height):
  - Pode ser declarado em pixels ou porcentagens
  - Também é possível determinar valores máximos para largura e altura

- Margem: é possível usar um valor auto para alinhar um elemento automaticamente
- Alinhamento do texto: left, right, center ou justified.

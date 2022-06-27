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

### Como organizar listas com HTML

### Introdução e conceitos básicos do CSS3

### Estilizando elementos, textos e listas

### Dimensão e alinhamento


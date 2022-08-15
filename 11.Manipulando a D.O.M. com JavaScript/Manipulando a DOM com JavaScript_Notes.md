# Manipulando a D.O.M com JavaScript

### D.O.M. (Document Object Model)

Padrão de como acessar e modificar elementos HTML

<img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220808121037575.png" width="400">

- E o **BOM**? = É tudo que está dentro do objeto window. O **DOM** é um de seus filhos (document).

  <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220808121306626.png" width="350">

### Métodos para interagir com elementos

- Estrutura:

  <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220808121828518.png" width="400" align="left">

  

- Selecionando elementos por tipo:

  ![image-20220808122009108](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220808122009108.png)

  - **getElementByTagName** e **getElementsByClassName** retornam um array, mesmo que haja apenas um elemento.

    

- **querySelectAll**: permite combinar mais de uma classificação, como duas classes em conjunto ou um tipo de tag somado à uma classe por exemplo.

  ![image-20220808122249143](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220808122249143.png)

  

- **Adicionar e deletar elementos**:

  ![image-20220808122501847](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220808122501847.png)

### Estilos

- **Element.classList**:

  - .add: adiciona uma classe

  - .remove: remove uma classe

  - .toggle: adiciona ou remove uma classe dependendo da existência ou não da classe no elemento

    ![image-20220812113946047](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220812113946047.png)

    <img src="C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220812114110920.png" width="400" align="left">

    

- **Element.style.CSS**:

  - .CSS = função CSS como color, font-size, border, etc.

    ![image-20220812114333342](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220812114333342.png)

### Eventos

Ação que o usuário faz em uma página da web ao interagir com seus elementos

- Eventos **do mouse**: mouseover, mouse out
- Eventos **de clique**: click, dbclick (cliques duplos)
- Eventos de **atualização**: change, load

#### Acionando eventos (EventListener)

- "Escutador" de eventos:

  ![image-20220814182727078](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220814182727078.png)

- Possível adicionar dentro do html (usar a palavra <ins>**on**</ins> na frente):

  ![image-20220814182843993](C:\Users\carol\AppData\Roaming\Typora\typora-user-images\image-20220814182843993.png)





## Atividade Prática

### Light Mode/Dark Mode

1. Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
2. Copie o HTML e o CSS deste repositório
3. Crie um arquivo chamado `scripts.js` na sua pasta `assets/js`
4. Selecione os elementos: `h1`, `button`, `footer` e `body`
5. Se os elementos possuirem a classe `dark-mode`, modifique seus estilos. Caso contrário, volte os estilos para o original


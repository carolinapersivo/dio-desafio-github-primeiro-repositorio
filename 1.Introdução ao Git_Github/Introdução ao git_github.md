## Git

O git é um sistema distribuído, de alta segurança, utilizado por devs em todo o mundo para compartilhar códigos e projetos e acompanhar mudanças. 

O git possui um algoritmo de encriptação (sha1) integrado.

### Objetos fundamentais

- blobs
- tress
- commits

### Configurando o Git

1. **Configurar o email:**             _git config --global user.email "<email>"_

2. **Configurar o usuário:         **_git config --global user.name <seu nome de usuário>_

   > Recomendado que o e-mail e nome de usuário sejam os mesmos do GitHub

### Autenticação

> Houve uma mudança na autenticação das novas versões do git, com adição de chaves SSH e Tokens
>
> Chave SSH: gera uma chave pública e outra privada e configura a máquina como confiável. A chave pública será utilizada na integração com o GitHub e a chave privada é utilizada na integração com o SSH Agent.
>
> Token: Código gerado que deve ser armazenado em local seguro. Pode ser estipulado um limite de tempo que determine o tempo de validade do token.

1. **Gerar chave SSH:**        _ssh -keygen -t ed25519 -c "<email>"_

2. **Descrever chave (mostra chave pública e privada):**  _cat id_ed25519.pub_

3. **Rodar SSH Agent:**       _eval $(ssh-agent -s)_

4. **Passar chave para o SSH Agent:**    _ssh-add id_ed25519_

   

### Iniciando o Git e criando uma commit

- **Criar um repositório:**   

  - Criar um diretório na pasta escolhida:          _mkdir <nome do diretório>_
  - Entrar no diretório criado:                               _cd <nome do diretório>_
  - Inicializar o git, gerando um repositório:      _git init_

  > É inicializado um repositório vazio dentro do diretório criado
  >
  > O comando **ls** não irá mostrar o repositório .git a menos que seja utilizado a flag -a no comando

  - Lista itens presentes no diretório, incluindo itens ocultos:   _ls -a_

- **Criando um commit**

  - Criar um arquivo em markdown (.md) no diretório

    > O arquivo README escrito em markdown serve como arquivo "de capa" no GitHub

  - Gera uma análise sobre o status dos componetes do repositório:   _git status_

  - Muda todos os componentes "untracked" para "staged":                  _git add *_

  - Cria um commit incluindo os componentes em "staged":                  _git commit -m "<mensagem>"_

### Criando um repositório no GitHub e "pushing" nosso commit local para o servidor

- Na página do GitHub, gerar um novo diretório com o nome desejado

  > É possível gerar um README no GitHub e definir como público ou privado

- Copiar link gerado (.git) e adicionar no Git Bash:      _git remote add origin <link do github>_

- "Empurrar" commit para o repositório:                     _git push origin master_

  > Pode ser solicitada uma autenticação pelo Github

  > Caso haja um conflito com outra atualização do repositório, o git pode pedir para puxar a atualização e resolver o conflito automaticamente:  _git pull origin master_
  >
  > > Caso haja uma alteração na mesma linha, irá ocorrer um conflito de "merge", sendo necessária a manipulação manual do conflito. Abrindo o conteúdo conflituoso será possível ver as marcações referentes à suas alterações e às alterações de terceiros.
  >
  > Após alterações é necessário "comittar" novamente o repositório


# README

Este projeto é uma aplicação Rails com React, baseada no repositório [rails-react](https://github.com/PivtoranisV/rails-react).

## Informações do Projeto

### Versão do Ruby
- **Ruby**: 3.0.2 (ou a versão especificada no arquivo `.ruby-version`)

### Banco de Dados
- **Banco de Dados**: PostgreSQL (configuração padrão para projetos Rails modernos)

### Gerenciador de Pacotes Frontend
- **Yarn**: 1.22.19 (ou a versão especificada no ambiente)

### Versão do Node.js
- **Node.js**: 18.x (ou a versão especificada no ambiente)

### Framework Frontend
- **React**: 17.x (ou a versão especificada no `package.json`)

## Dependências e Configuração

1. Certifique-se de ter o Ruby, Node.js e o PostgreSQL instalados.
2. Instale as dependências do backend com:
    ```bash
    bundle install
    ```
3. Instale as dependências do frontend com:
    ```bash
    yarn install
    ```

## Como Rodar o Projeto

1. Configure o banco de dados:
    ```bash
    rails db:setup
    ```
2. Inicie o projeto com o comando:
    ```bash
    rails server
    ```
3. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Base do Projeto

Este projeto foi inspirado no repositório rails-react, que combina o poder do Rails no backend com a flexibilidade do React no frontend.

## Observações

- Certifique-se de verificar os arquivos `Gemfile` e `package.json` para mais detalhes sobre as dependências.
- Consulte a documentação oficial do Rails e do React para mais informações sobre como personalizar o projeto.
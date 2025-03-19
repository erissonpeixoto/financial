# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version: 3.2.1

* Rails version: 8.0.2

* Database: postgres

# Comandos Docker Utilizados

### 1. `docker compose up`
- **Resumo**: Inicia os containers definidos no arquivo `docker-compose.yml`. Se os containers ainda não existirem, ele os cria. Esse comando também pode ser usado para rodar a aplicação.
- **Exemplo**: 
  ```bash
  docker compose up
  ```

### 2. `docker compose up --build`
- **Resumo**: Inicia os containers e recria as imagens se houverem alterações no Dockerfile ou no contexto de build. Isso garante que a aplicação seja reconstruída com as últimas mudanças.
- **Exemplo**:
  ```bash
  docker compose up --build
  ```

### 3. `docker compose down`
- **Resumo**: Derruba os containers e remove redes, volumes e imagens associadas aos containers. Esse comando é útil quando você quer parar tudo e recomeçar.
- **Exemplo**:
  ```bash
  docker compose down
  ```

### 4. `docker compose logs web`
- **Resumo**: Exibe os logs do serviço `web` definido no `docker-compose.yml`. É útil para verificar o que está acontecendo dentro do container ou identificar erros.
- **Exemplo**:
  ```bash
  docker compose logs web
  ```

### 5. `docker compose exec web bash`
- **Resumo**: Executa um comando dentro do container em execução, no caso `web`. No exemplo, é aberto um shell interativo (`bash`) dentro do container, permitindo que você execute comandos dentro do ambiente do container.
- **Exemplo**:
  ```bash
  docker compose exec web bash
  ```

### 6. `ps aux | grep rails`
- **Resumo**: Comando do sistema operacional (não específico do Docker) que lista todos os processos em execução. Com `grep rails`, filtra os processos relacionados ao Rails. É útil para verificar se o servidor Rails está rodando dentro do container.
- **Exemplo**:
  ```bash
  ps aux | grep rails
  ```

### 7. `docker compose build`
- **Resumo**: Reconstrói as imagens Docker para os serviços definidos no arquivo `docker-compose.yml`, sem iniciar os containers. Pode ser útil para reconstruir as imagens quando há alterações no Dockerfile ou nas dependências.
- **Exemplo**:
  ```bash
  docker compose build
  ```

### 8. `docker compose run web rails db:create`
- **Resumo**: Executa um comando específico no container de um serviço. No exemplo, o comando `rails db:create` é executado no serviço `web`, criando o banco de dados do Rails. Este comando é útil para rodar tarefas específicas dentro do container.
- **Exemplo**:
  ```bash
  docker compose run web rails db:create
  ou
  docker compose run web bundle exec rails db:create
  ```

### 9. `docker compose run web rails db:migrate`
- **Resumo**: Executa as migrações do banco de dados no container `web`. O comando aplica as mudanças no banco de dados de acordo com os arquivos de migração do Rails.
- **Exemplo**:
  ```bash
  docker compose run web rails db:migrate
  ou
  docker compose run web bundle exec rails db:migrate
  ```

### 10. `docker compose exec web curl http://localhost:3000`
- **Resumo**: Executa um comando `curl` dentro do container para verificar se a aplicação está acessível na porta 3000 dentro do próprio container. Pode ser útil para verificar se o servidor Rails está respondendo corretamente.
- **Exemplo**:
  ```bash
  docker compose exec web curl http://localhost:3000
  ```

* ...

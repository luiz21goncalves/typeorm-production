# Typeorm Production

> Um teste que como colocar um projeto `NodeJS` em produção com `Typeorm` de uma forma fácil de fazer deploy e configurações de ambientes.

# Pré-requisitos

Antes de começar você vai precisar das seguintes ferramentas:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/)
- opcional [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker compose](https://docs.docker.com/compose/install/)

# Executando o projeto

```bash
# clone o projeto
git clone git@github.com:luiz21goncalves/typeorm-production.git

# acesse o diretório
cd typeorm-production

# configure as váriaves de ambiente
cp .env.example .env

# configure conexão com bando de dados
cp ormconfig.example.js ormconfig.js

# instalando as dependências
yarn

# execute docker do banco de dados
docker-compose --env-file .env up -d

# rode as 'migrations'
yarn typeorm migrations:run

# execute a aplicação em modo de desenvolvimento
yarn dev
```

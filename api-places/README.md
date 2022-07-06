<div align="center">
  <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
  <img src="https://github.com/GabrielChagas1/backend-challenge/blob/master/img/logo-clubpetro.png" width="320" alt="ClubPetro Logo" />
</div>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

## Desafio ClubPetro

Para esse desafio foi utilizado o framework [NestJs](https://github.com/nestjs/nest) com Typescript e [TypeORM](https://typeorm.io/#/)

## Rodar aplicação

0. Requisitos:

- git
- Node.js
- npm

1. Clonar esse repositório:
   `$ git clone https://github.com/GabrielChagas1/backend-challenge.git`

2. Entrar na pasta do projeto:
   `$ cd backend-challenge/`

3. Entrar na pasta api-places:
   `cd api-places`

4. Instalar as Dependências:
   `$ npm install`

5. Rodar Projeto:
   `$ npm start`

**Será executado em** `localhost:8080`
_Exemplo:_ : `localhost:8080/api/v1/place`

## Endpoints

A aplicação possui 5 endpoints:

- Utilizar o Insominia para fazer as requisições.

- http://localhost:8080/api/v1/place (POST) Faz a inserção de um novo local de visita

```bash
{
	"country": "Brasil",
	"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
	"location": "São Paulo",
	"meta": "04/2023"
}
```

- http://localhost:8080/api/v1/place/{id} (PUT) Realiza o update de um local de visita, apenas meta e local podem ser atualizados

```bash
{
	"location": "São Paulo",
	"meta": "04/2023"
}
```

- http://localhost:8080/api/v1/place/{id} (DELETE) Realiza o delete de um local de visita

```bash
{
	"data": "O registro com o id ${id} foi deletado com sucesso!"
}
```

- http://localhost:8080/api/v1/place/{id} (GET) Busca um registro por ID

```bash
	{
    "id": 1,
    "country": "Brasil",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
    "location": "São Paulo",
    "meta": "Paulista",
    "created_at": "2022-07-06T00:21:13.000Z",
    "updated_at": "2022-07-06T00:21:13.000Z"
  }
```

- http://localhost:8080/api/v1/place (GET) Busca todos os registros ordenados pela meta

```bash
	{
    "id": 1,
    "country": "Brasil",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
    "location": "São Paulo",
    "meta": "Paulista",
    "created_at": "2022-07-06T00:21:13.000Z",
    "updated_at": "2022-07-06T00:21:13.000Z"
  }
```

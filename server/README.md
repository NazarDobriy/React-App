## To Run an application with docker

```bash
$ docker-compose up --build
```

## To Run an application locally

- configure .env file

```bash
PORT=5000
POSTGRES_HOST=postgres
POSTGRES_USER=postgres
POSTGRES_DB=nest-server
POSTGRES_PASSWORD=root
POSTGRES_PORT=5432
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

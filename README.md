# Storefront Backend Project

## Required Technologies

The application use the following libraries:

- Postgres for the database
- Node/Express for the application logic
- dotenv from yarn for managing environment variables
- db-migrate from yarn for migrations
- jsonwebtoken from yarn for working with JWTs
- jasmine from yarn for testing

## Package installation

`run -> yarn install `

## Scripts Used

```sh
build -> to compile TS files to JS files into dist Dir "yarn run build"
start -> run the server "yarn run start"
dev   -> nodemon package to run and refresh the server every time the code changed and saved "yarn run dev"
lint  -> get any error with syntax stylish using eslint configurations "yarn run lint"
lint -> fix all the error of syntax stylish "yarn run lint"
test -> only test the suites test with jasmine "yarn run test"
```

### Plan to Meet Requirements (Endpoints & Database Schema)

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API.

### Database Creation

```sh
# create user
CREATE USER username WITH PASSWORD 123456 ;

# create Database
CREATE DATABASE proj_dev;
CREATE DATABASE proj_test;

# grant all databases to the user
GRANT ALL PRIVILEGES ON DATABASE proj_dev TO username;
GRANT ALL PRIVILEGES ON DATABASE proj_test TO username;
```

### Database Migrations

```sh
# Migrations used in this repo
db-migrate create add-users-table --sql-file
db-migrate create add-product-table --sql-file
db-migrate create add-order-table --sql-file
db-migrate create add-product-order-table --sql-file
# to create the same data schema run this command to create all tables
db-migrate up
# to drop the data schema tables run this command to drop each table separately
db-migrate down
# to reset the data schema tables run this command
db-migrate reset
```

### Environmental Variables (.env file contents)

```sh
# to connect with the database use the following environmental variables
PORT=3000
ENV=dev
POSTGRES_HOST=localhost
POSTGRES_DB=proj_dev
POSTGRES_DB_TEST=proj_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123456
BCRYPT_PASSWORD=secret-password
SALT_ROUND=10
TOKEN_SECRET=secret-token
```

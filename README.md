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
CREATE USER postgres WITH PASSWORD 123456 ;

you need to enter psql postgres environment using command:

psql -U username postgres
and enter the password related to username.

Note that the postgresql port used is: 5432.

# create Database
CREATE DATABASE proj_dev;
CREATE DATABASE proj_test;

# grant all databases to the user
GRANT ALL PRIVILEGES ON DATABASE proj_dev TO postgres;
GRANT ALL PRIVILEGES ON DATABASE proj_test TO postgres;
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

### Using the server and endpoints

first you will need to run the server using:

```
yarn dev
```

note that the server runs on port: `3000` on localhost, so to try it goto

```
http://localhost:3000

```

#### 1 - Users

a.POST '/users' this will enables you to create new user, and it will return a token, that you will use in certain endpoints.
you must enter the "first_name", "last_name", and "password" to succeufully create user.

b.GET '/users' this will return all the users in database(you will need to enter token).

c.GET '/users/:id' this will return a user using its id(you will need to enter token).
example: '/users/1'

d.PUT '/user/:id' this will update user using id.

e.DELETE '/user/:id' this will delete user by id.

#### 2 - Products

a. POST '/products' this will create new product(you will need to enter token), you must enter the "name", "price" to succeufully create the product.

a.GET '/products' this will show all the products in database.

c.GET '/product:/id' this will return a product using its id, example: '/products/2'.

d.PUT '/product/:id' this will update product.

d.DELETE '/product/:id' this will delete product.

#### 3 - Orders endpoint

a. POST '/order' this will make order, (you will need to enter token).

b. POST '/orders/:id/product' this will enables you to add product to your order, (you will need to enter token).

c. GET '/orders' this will show all the orders (you will need to enter token).

d. GET '/orders/:id' this will show all the orders that relate to user, (you will need to enter token), example: '/orders/2', will return all the orders for user that have id of 2.

e. PUT '/order/:id' this will update order by id, (you will need to enter token).

f. DELETE '/order/:id' this will delete order by id, (you will need to enter token).

## Testing

### Jasmine Test

```
yarn test

```

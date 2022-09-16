# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index
- Show
- Create [token required]
- update [token required]
- delete [token required]

#### Users

- Index [token required]
- Show [token required]
- Create N[token required]
- update user [token required]
- delete user [token required]

#### Orders

- Index [token required]
- Show [token required]
- Create order [token required]
- Current Order by user (args: user id)[token required]
- update [token required]

## Data Shapes

#### Product

- id: integer
- name: varchar
- price: numeric
- category: varchar

#### Users

- id: integer
- first_name: varchar
- last_name: varchar
- password: varchar

#### Orders

- id: integer
- user_id: integer
- status of order (active or complete): varchar

#### orderProduct

- id: integer
- quantity of each product in the order: integer
- order_id: integer
- id of each product in the order: integer

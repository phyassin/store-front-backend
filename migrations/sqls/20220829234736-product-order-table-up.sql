CREATE TABLE orderProduct (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id integer REFERENCES orders(id),
    product_id integer REFERENCES product(id)
);
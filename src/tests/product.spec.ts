import supertest from 'supertest'
import app from '../index'
import jwt from 'jsonwebtoken';
import config from '../config';

const request = supertest(app)

const testUser = {
    first_name: 'one',
    last_name: 'two',
    password: '54545',
};

const token = jwt.sign(testUser, config.secretToken as unknown as string)

describe('Test products', () => {

    it('create product and token needed POST /product', async () => {
        const response = await request
            .post('/product')
            .send({
                name: 'new product',
                price: 545,
            })
            .set('Authorization', `Bearer ${token}`);
        expect(response.body.data.name).toBe('new product');
    });

    it('trying create product withut token POST /product', async () => {
        const response = await request.post('/product').send({
            name: 'new 2 product',
            price: 7477,
        });
        expect(response.status).toBe(401);
    });

    it('show all products GET /products', async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });

    it('show one product GET /product/:id', async () => {
        const response = await request.get('/product/1');
        expect(response.status).toBe(200);
    });

    it('update product and token needed PUT /product/:id', async () => {
        const response = await request
            .put('/product/1')
            .send({
                name: 'updated product',
                price: 7777,
            })
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it('delete product and token needed DELETE /product/:id', async () => {
        const response = await request
            .delete('/product/1')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

});
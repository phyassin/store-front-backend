import supertest from 'supertest'
import app from '../index'
import jwt from 'jsonwebtoken';
import config from '../myConfig';
import orType from '../types/orType'
import modelOrder from '../models/orMod';

const request = supertest(app)

const orTestModel = new modelOrder();

const testUser = {
    first_name: 'one',
    last_name: 'two',
    password: '54545',
};

const token = jwt.sign(testUser, config.private as unknown as string)

describe('Test orders', () => {

    it('create order and token needed POST /order', async () => {
        const response = await request
            .post('/order')
            .send({
                status: 'order test',
                user_id: 1,
            })
            .set('Authorization', `Bearer ${token}`);
        expect(response.body.status).toBe('order test');
    });

    it('create order and failed bec of token POST /order', async () => {
        const response = await request.post('/order').send({
            status: 'order 2 test',
            user_id: 1,
        });
        expect(response.status).toBe(401);
    });

    it('show all orders and token needed GET /orders', async () => {
        const response = await request
            .get('/orders')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it('show order by user and token needed GET /orders/:id ', async () => {
        const response = await request
            .get('/orders/1')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it('update order and token needed PUT /order/:id', async () => {
        const response = await request
            .put('/order/1')
            .send({
                status: 'order updated'
            })
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it('delete order and failed bec of token DELETE /order/:id', async () => {
        const response = await request.delete('/order/1');
        expect(response.status).toBe(401);
    });

})

describe('order model', () => {

    it('create order', () => {
        expect(orTestModel.createMyOrder).toBeDefined
    })

    it('should create order', async () => {
        const nOrder: orType = {
            status: 'order model test',
            user_id: 2
        }
        const result = await orTestModel.createMyOrder(nOrder)
        expect(result.status).toEqual('order model test')
    })

    it('create order product method', () => {
        expect(orTestModel.createOrderProduct).toBeDefined
    })

    it('show orders', () => {
        expect(orTestModel.showOrders).toBeDefined
    })

    it('should be these values', async () => {
        const result = await orTestModel.showOrders()
        expect(result[0].status == 'order model test').toBeTrue
    })

    it('update', () => {
        expect(orTestModel.updateOrder).toBeDefined
    })

    it('delete', () => {
        expect(orTestModel.deleteOrder).toBeDefined
    })

})
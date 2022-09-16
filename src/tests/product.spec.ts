import supertest from 'supertest'
import app from '../index'
import jwt from 'jsonwebtoken';
import config from '../myConfig';
import modelProduct from "../models/prodMod";
import prodType from '../types/prodType';

const request = supertest(app)

const prodTestModel = new modelProduct();

const testUser = {
    first_name: 'one',
    last_name: 'two',
    password: '54545',
};

const token = jwt.sign(testUser, config.private as unknown as string)

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

    it('create second product and token needed POST /product', async () => {
        const response = await request
            .post('/product')
            .send({
                name: 'new sec product',
                price: 5455,
            })
            .set('Authorization', `Bearer ${token}`);
        expect(response.body.data.name).toBe('new sec product');
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
            .put('/product/2')
            .send({
                name: 'updated product',
                price: 7777,
            })
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it('delete product and token needed DELETE /product/:id', async () => {
        const response = await request
            .delete('/product/2')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

});

describe('model products', () => {

    it('create product', () => {
        expect(prodTestModel.createPro).toBeDefined
    })

    it('should create this', async () => {
        const nProduct: prodType = {
            name: 'new third product',
            price: 55555
        }
        const result = await prodTestModel.createPro(nProduct)
        expect(result.price).toEqual(55555)
    })

    it('index', () => {
        expect(prodTestModel.showAllPro).toBeDefined
    })

    it('should be these values', async () => {
        const result = await prodTestModel.showAllPro()
        expect(result[0].name == 'new product').toBeTrue
    })

    it('index', () => {
        expect(prodTestModel.showOnePro).toBeDefined
    })

    it('should be this value', async () => {
        const result = await prodTestModel.showOnePro(1)
        expect(result.name == 'new product').toBeTrue
        expect(result.price).toEqual(545)
    })

    it('update', () => {
        expect(prodTestModel.updatePro).toBeDefined
    })

    it('delete', () => {
        expect(prodTestModel.deletePro).toBeDefined
    })

})
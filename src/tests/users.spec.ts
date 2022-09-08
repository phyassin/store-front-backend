import supertest from 'supertest'
import app from '../index'
import jwt from 'jsonwebtoken';
import config from '../myConfig';

const request = supertest(app)

const testUser = {
    first_name: 'one',
    last_name: 'two',
    password: '54545',
};

const token = jwt.sign(testUser, config.private as unknown as string)

beforeAll(async () => {
    const add = await request.post('/users').send({
        first_name: 'one',
        last_name: 'two',
        password: '54545',
    });
    add.statusCode == 200 ? console.log('user added') : console.log('error');
});

describe('test users', () => {

    it('create user POST /users', async () => {
        const response = await request.post('/users').send({
            first_name: 'onee',
            last_name: 'twoo',
            password: '545455',
        });
        expect(response.body.data.first_name).toBe("onee");
    });

    it('show all users and token needed GET /users', async () => {
        const response = await request
            .get('/users')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it('show one user by id and token needed GET /users/:id', async () => {
        const response = await request
            .get('/users/1')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it('show user by id GET /users/:id', async () => {
        const response = await request
            .get('/users/1')
            .set('Authorization', `Bearer ${token}`);
        expect(response.body.data.id).toBe(1);
    });

    it('updating user and token needed PUT /user/:id', async () => {
        const response = await request
            .put('/user/1')
            .send({
                first_name: 'one updated',
                last_name: 'two updated',
                password: 'pass updated',
            })
            .set('Authorization', `Bearer ${token}`);
        expect(response.body.data.last_name).toBe('two updated');
    });

    it('delete user without token DELETE /user/:id', async () => {
        const response = await request.delete('/user/1');
        expect(response.status).toBe(401);
    });

})
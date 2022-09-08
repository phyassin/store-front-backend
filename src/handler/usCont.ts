import express, { NextFunction, Request, Response } from 'express'
import usType from '../types/usType';
import modelUser from '../models/usMod';
import jwt from 'jsonwebtoken';
import authenValidate from '../middleware/authen.middleware'
import dotenv from 'dotenv';
import config from "../myConfig";


dotenv.config();

const ModelUser = new modelUser()
// Create User
const createUser = async (req: Request, res: Response) => {
    const creation: usType = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    }
    try {
        const user = await ModelUser.createUser(creation);
        res.json({
            status: 'success',
            data: { ...user },
            message: 'user created'
        });
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
// index, Show all users
const showAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await ModelUser.showAllUsers();
        res.json({
            status: 'success',
            data: users,
            message: 'all users'
        })
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
// show,  show user by id
const showUser = async (req: Request, res: Response) => {
    try {
        const user = await ModelUser.showUser(req.params.id as unknown as number);
        res.json({
            status: 'success',
            data: user,
            message: 'user retrieved'
        })
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
// authenticate user
const authenticate = async (
    req: Request, res: Response, next: NextFunction
) => {
    try {
        const { first_name, last_name, password } = req.body;
        const user = await ModelUser.authenticate(first_name, last_name, password);
        const token = jwt.sign({ user }, config.private as unknown as string)
        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'please try again first and last names dont match'
            });
        }
        return res.json({
            status: 'success',
            data: { ...user, token },
            message: 'user authentiiicated'
        })
    } catch (err) {
        return next(err)
    }
}
// Update user by id
const updUser = async (req: Request, res: Response) => {
    try {
        const creation: usType = {
            id: req.params.id as unknown as number,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password
        }
        const user = await ModelUser.updateUser(creation);
        res.json({
            status: 'success',
            data: user,
            message: 'user updated'
        });
    } catch (error) {
        res.status(400).json(error);
    }
};
// delete user by id
const delUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as number;
        const user = await ModelUser.deleteUser(id);
        res.json({
            status: 'success',
            data: user,
            message: 'user deleted'
        });
    } catch (error) {
        res.status(400).json(error);
    }
};
// routing
const lastUser = (app: express.Application) => {
    app.post('/users', createUser)
    app.get('/users', authenValidate, showAllUsers)
    app.get('/users/:id', authenValidate, showUser)
    app.post('/authen', authenticate)
    app.put('/user/:id', authenValidate, updUser)
    app.delete('/user/:id', authenValidate, delUser)
}
export default lastUser;
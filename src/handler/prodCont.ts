import express, { Request, Response } from "express";
import prodType from "../types/prodType";
import modelProduct from "../models/prodMod";
import dotenv from 'dotenv';
import authenValidate from '../middleware/authen.middleware'

dotenv.config();

const ModelProduct = new modelProduct();
// Create product
const createPro = async (req: Request, res: Response) => {
    try {
        const creation: prodType = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        }
        const product = await ModelProduct.createPro(creation);
        res.json({
            status: 'success',
            data: { ...product },
            message: 'product created'
        });
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
// index, show all products
const showAllPro = async (req: Request, res: Response) => {
    try {
        const products = await ModelProduct.showAllPro();
        res.json({
            status: 'success',
            data: products,
            message: 'all products'
        })
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
//show, show product by id
const showOnePro = async (req: Request, res: Response) => {
    try {
        const product = await ModelProduct.showOnePro(req.params.id as unknown as number);
        res.json({
            status: 'success',
            data: product,
            message: 'product retrieved'
        })
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
// update product by id
const updatePro = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as number;
        const { name, price } = req.body;
        const updPro = await ModelProduct.updatePro(id, name, price);
        res.status(200).send(updPro);
    } catch (error) {
        res.status(400).json(error);
    }
};
// delete product by id
const deletePro = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as number;
        const deletedPro = await ModelProduct.deletePro(id);
        res.status(200).send(deletedPro);
    } catch (error) {
        res.status(400).json(error);
    }
};
// routing
const lastProduct = (app: express.Application) => {
    app.post('/product', authenValidate, createPro)
    app.get('/products', showAllPro)
    app.get('/product/:id', showOnePro)
    app.put('/product/:id', authenValidate, updatePro);
    app.delete('/product/:id', authenValidate, deletePro);
}
export default lastProduct
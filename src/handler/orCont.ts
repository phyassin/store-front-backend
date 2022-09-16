import express, { Request, Response } from 'express';
import authenValidate from '../middleware/authen.middleware';
import modelOrder from '../models/orMod';
import orType from '../types/orType';

const ModelOrder = new modelOrder();
// Create order
const createMyOrder = async (req: Request, res: Response) => {
    try {
        const creation: orType = {
            status: req.body.status,
            user_id: req.body.user_id
        }
        const orderCreated = await ModelOrder.createMyOrder(creation);
        res.status(200).send(orderCreated);
    } catch (error) {
        res.status(400).json(error);
    }
};
// Add product to order by id
const createOrderProduct = async (req: Request, res: Response) => {
    try {
        const quantity = req.body.quantity;
        const order_id = req.params.id as unknown as number;
        const product_id = req.body.product_id;
        const addPro = await ModelOrder.createOrderProduct(quantity, order_id, product_id);
        res.json(addPro)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
// Index, show all orders
const showOrders = async (req: Request, res: Response) => {
    try {
        const allOrders = await ModelOrder.showOrders();
        res.status(200).send(allOrders);
    } catch (error) {
        res.status(400).json(error);
    }
};
// Show, show user by id
const showOrdersUser = async (req: Request, res: Response) => {
    try {
        const orders = await ModelOrder.showOrdersUser(req.params.id as unknown as number)
        res.json(orders)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
// Update order by id
const updateOrder = async (req: Request, res: Response) => {
    try {
        const upId = req.params.id as unknown as number;
        const status = req.body.status;
        const myOrder = await ModelOrder.updateOrder(upId, status);
        res.status(200).send(myOrder);
    } catch (error) {
        res.status(400).json(error);
    }
};
// Delete order by id
const deleteOrder = async (req: Request, res: Response) => {
    try {
        const delId = req.params.id as unknown as number;
        const myOrdeer = await ModelOrder.deleteOrder(delId);
        res.status(200).send(myOrdeer);
    } catch (error) {
        res.status(400).json(error);
    }
};
// routing
const lastOrder = (app: express.Application) => {
    app.post('/order', authenValidate, createMyOrder);
    app.post('/orders/:id/product', authenValidate, createOrderProduct);
    app.get('/orders', authenValidate, showOrders);
    app.get('/orders/:id', authenValidate, showOrdersUser);
    app.put('/order/:id', authenValidate, updateOrder);
    app.delete('/order/:id', authenValidate, deleteOrder);
}

export default lastOrder;
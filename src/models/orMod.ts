import db from '../database/database'
import orType from '../types/orType'

class modelOrder {

    async createMyOrder(o: orType): Promise<orType> {
        try {
            const connect = await db.connect();
            const sql =
                'INSERT INTO orders (status,user_id) VALUES($1, $2) RETURNING *';
            const result = await connect.query(sql, [o.status, o.user_id]);
            connect.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(
                `unable to add order: ${error}`
            );
        }
    }

    async createOrderProduct(quantity: number, order_id: number, product_id: number): Promise<orType> {
        try {
            const connect = await db.connect();
            const sql = `INSERT INTO orderProduct (quantity, order_id, product_id) VALUES ($1, $2, $3) returning *`
            const result = await connect.query(sql, [quantity, order_id, product_id])
            connect.release();

            return result.rows[0]
        } catch (err) {
            throw new Error(`can not create this product to order ${err}`)
        }
    }

    async showOrders(): Promise<orType[]> {
        try {
            const connect = await db.connect();
            const sql = 'SELECT * FROM orders';
            const result = await connect.query(sql);
            connect.release();
            return result.rows;
        } catch (err) {
            throw new Error(
                `unable to show orders: ${err}`
            );
        }
    }

    async showOrdersUser(user_id: number): Promise<orType[]> {

        try {
            const connect = await db.connect();
            const sql = `SELECT * FROM orders WHERE user_id= ($1)`;
            const result = await connect.query(sql, [user_id])
            connect.release()
            return result.rows
        } catch (err) {
            throw new Error(`can not get orders for user ${err}`)
        }
    }

    async updateOrder(id: number, status: string): Promise<orType> {
        try {
            const connect = await db.connect();
            const sql = 'UPDATE orders SET status=($2) WHERE id=($1) RETURNING *';
            const result = await connect.query(sql, [id, status]);
            connect.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(
                `unable to update order: ${error}`
            );
        }
    }

    async deleteOrder(id: number): Promise<orType> {
        try {
            const connect = await db.connect();
            const sql = 'DELETE FROM orders WHERE id=($1) RETURNING *';
            const result = await connect.query(sql, [id]);
            connect.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(
                `unable to delete order: ${error}`
            );
        }
    }

}
export default modelOrder
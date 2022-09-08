import db from '../database/database'
import producType from '../types/product.type'

class modelProduct {

  async createPro(p: producType): Promise<producType> {
    try {
      const connect = await db.connect();
      const sql = `INSERT INTO product (name, price, category) VALUES ($1, $2, $3) returning *`;
      const result = await connect.query(sql, [p.name, p.price, p.category])
      connect.release()
      return result.rows[0];
    } catch (err) {
      throw new Error(`can not create this product ${err}`)
    }
  }

  async showAllPro(): Promise<producType[]> {
    try {
      const connect = await db.connect();
      const sql = 'SELECT * FROM product';
      const result = await connect.query(sql)
      connect.release()
      return result.rows
    } catch (err) {
      throw new Error(`can not show all products ${err}`)
    }
  }

  async showOnePro(id: number): Promise<producType> {
    try {
      const connect = await db.connect();
      const sql = `SELECT * FROM product WHERE id= ($1)`;
      const result = await connect.query(sql, [id])
      connect.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`can not show this product ${err}`)
    }
  }

  async updatePro(id: number, name: string, price: string): Promise<producType> {
    try {
      const connect = await db.connect();
      const sql = 'UPDATE product SET name=($2), price=($3) WHERE id=($1) RETURNING *';
      const result = await connect.query(sql, [id, name, price]);
      connect.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `unable to update product: ${error}`
      );
    }
  }

  async deletePro(id: number): Promise<producType> {
    try {
      const connect = await db.connect();
      const sql = 'DELETE FROM product WHERE id=($1) RETURNING *';
      const result = await connect.query(sql, [id]);
      connect.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `unable to delete product: ${error}`
      );
    }
  }

}
export default modelProduct;
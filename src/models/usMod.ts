import usType from "../types/usType";
import db from '../database/database';
import bcrypt from 'bcrypt';
import config from "../myConfig";

class modelUser {

    async createUser(usType: usType): Promise<usType> {
        try {
            const connect = await db.connect();
            const sql = `INSERT INTO users (first_name, last_name, password) values ($1, $2, $3) returning *`;
            const sugar = parseInt(config.sugar as string, 10)
            const hashword = (pass: string) => {
                return bcrypt.hashSync(
                    `${pass}${config.pepp}`,
                    sugar
                );
            }
            const result = await connect.query(sql, [usType.first_name, usType.last_name, hashword(usType.password)]);
            connect.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`can not create user ${err}!!`)
        }
    }

    async showAllUsers(): Promise<usType[]> {
        try {
            const connect = await db.connect();
            const sql = `SELECT * FROM users`;
            const result = await connect.query(sql);
            connect.release();
            return result.rows
        } catch (err) {
            throw new Error(`can not show all users ${err}!!`)
        }
    }

    async showUser(id: number): Promise<usType> {
        try {
            const connect = await db.connect();
            const sql = `SELECT * FROM users WHERE id = ($1)`;
            const result = await connect.query(sql, [id]);
            connect.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`can not get this user ${err}!!`)
        }

    }

    async authenticate(first_name: string, last_name: string, password: string): Promise<usType | null> {
        try {
            const connect = await db.connect();
            const sql = `SELECT password FROM users WHERE first_name =($1) AND last_name =($2)`;
            const result = await connect.query(sql, [first_name, last_name]);

            if (result.rows.length) {
                const { password: hashword } = result.rows[0]

                if (bcrypt.compareSync(`${password}${config.pepp}`, hashword)) {
                    const info = await connect.query(
                        `SELECT id, first_name, last_name FROM users WHERE first_name = ($1) AND last_name = ($2)`, [first_name, last_name]
                    );
                    return info.rows[0];
                }
            }
            connect.release();
            return null
        } catch (err) {
            throw new Error(`can not login ${err}!!`)
        }
    }

    async updateUser(usType: usType): Promise<usType> {
        try {
            const connect = await db.connect();
            const sugar = parseInt(config.sugar as string, 10)
            const hashword = (pass: string) => {
                return bcrypt.hashSync(
                    `${pass}${config.pepp}`,
                    sugar
                );
            }
            const sql =
                'UPDATE users SET first_name=($2), last_name=($3), password=($4)  WHERE id=($1) RETURNING id, first_name, last_name';
            const result = await connect.query(sql, [usType.id, usType.first_name, usType.last_name, hashword(usType.password)]);
            connect.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(
                `unable to update user: ${error}`
            );
        }
    }

    async deleteUser(id: number): Promise<usType> {
        try {
            const connect = await db.connect();
            const sql =
                'DELETE FROM users WHERE id=($1) RETURNING id, first_name, last_name';
            const result = await connect.query(sql, [id]);
            connect.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(
                `unable to delete user: ${error}`
            );
        }
    }

}
export default modelUser;
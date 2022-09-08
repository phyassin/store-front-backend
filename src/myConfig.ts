import dotenv from 'dotenv'
dotenv.config()
const {
    PORT,
    ENV,
    SALT_ROUND,
    POSTGRES_HOST,
    BCRYPT_PASSWORD,
    POSTGRES_DB,
    TOKEN_SECRET,
    POSTGRES_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD
} = process.env

export default {
    port: PORT,
    sugar: SALT_ROUND,
    host: POSTGRES_HOST,
    database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
    pepp: BCRYPT_PASSWORD,
    user: POSTGRES_USER,
    private: TOKEN_SECRET,
    password: POSTGRES_PASSWORD
}
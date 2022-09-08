import dotenv from 'dotenv'

dotenv.config()

const {
    PORT,
    ENV,
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    BCRYPT_PASSWORD,
    SALT_ROUND,
    TOKEN_SECRET
} = process.env

export default {
    port: PORT,
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
    pepper: BCRYPT_PASSWORD,
    salt: SALT_ROUND,
    secretToken: TOKEN_SECRET
}
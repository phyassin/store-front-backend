"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, PORT = _a.PORT, ENV = _a.ENV, SALT_ROUND = _a.SALT_ROUND, POSTGRES_HOST = _a.POSTGRES_HOST, BCRYPT_PASSWORD = _a.BCRYPT_PASSWORD, POSTGRES_DB = _a.POSTGRES_DB, TOKEN_SECRET = _a.TOKEN_SECRET, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD;
exports.default = {
    port: PORT,
    sugar: SALT_ROUND,
    host: POSTGRES_HOST,
    database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
    pepp: BCRYPT_PASSWORD,
    user: POSTGRES_USER,
    private: TOKEN_SECRET,
    password: POSTGRES_PASSWORD
};

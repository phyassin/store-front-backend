"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var myConfig_1 = __importDefault(require("../myConfig"));
var pool = new pg_1.Pool({
    host: myConfig_1.default.host,
    database: myConfig_1.default.database,
    user: myConfig_1.default.user,
    password: myConfig_1.default.password
});
pool.on('error', function (error) {
    console.error(error.message);
});
exports.default = pool;

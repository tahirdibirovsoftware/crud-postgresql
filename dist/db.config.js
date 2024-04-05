"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'store',
    port: 5432
});
exports.default = pool;

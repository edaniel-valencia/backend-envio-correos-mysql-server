"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const pool = mysql2_1.default.createPool({
    host: 'localhost',
    user: 'root',
    password: '1004-TSE',
    database: 'email-send'
});
const connection = pool.promise();
exports.default = connection;
// import mysql from 'mysql2';
// // Crear una conexión única en lugar de un pool
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1004-TSE',
//     database: 'email-send'
// });
// export default connection.promise(); 

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModal = void 0;
const conexion_1 = __importDefault(require("../database/conexion"));
exports.categoryModal = {
    readCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            const [sql] = yield conexion_1.default.execute('SELECT * FROM categories');
            return sql;
        });
    },
    createCategory(Cname) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const [sql] = yield conexion_1.default.execute('INSERT INTO categories (Cname, Cstatus, Ccreated) VALUES (?, ?, ?)', [Cname, 1, createdAt]);
            // await connection.end();
            return sql;
        });
    },
    updateCategory(Cid, Cname, Cstatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const [sql] = yield conexion_1.default.execute('UPDATE categories SET Cname = ?, Cstatus = ? WHERE Cid = ?', [Cname, Cstatus, Cid]);
            // await connection.end();
            return sql;
        });
    },
    deteleCategory(Cid) {
        return __awaiter(this, void 0, void 0, function* () {
            const [sql] = yield conexion_1.default.execute('DELETE FROM categories WHERE Cid = ?', [Cid]);
            // await connection.end();
            return sql;
        });
    },
    readIdDCategory(Cid) {
        return __awaiter(this, void 0, void 0, function* () {
            const [sql] = yield conexion_1.default.execute('SELECT * FROM categories WHERE Cid = ?', [Cid]);
            return sql;
        });
    },
    readCategoryId(Cid) {
        return __awaiter(this, void 0, void 0, function* () {
            const [sql] = yield conexion_1.default.execute('SELECT * FROM categories WHERE Cid = ?', [Cid]);
            return sql.length > 0;
        });
    },
    readCategoryName(Cname) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield conexion_1.default.execute('SELECT * FROM categories WHERE Cname = ?', [Cname]);
            // `rows` es el array de resultados, y verificamos si hay resultados
            return rows.length > 0;
        });
    }
};

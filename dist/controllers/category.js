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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_1 = require("../models/category");
exports.CategoryController = {
    readCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listCategory = yield category_1.categoryModal.readCategory();
                if (listCategory.length === 0) {
                    return res
                        .status(404)
                        .json({ message: "No se han encontrado categorías" });
                }
                res.json(listCategory);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Error al obtener categorías", error });
            }
        });
    },
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Cname } = req.body;
            console.log(req.body);
            try {
                // Verificar si la categoría ya existe
                const existingCategory = yield category_1.categoryModal.readCategoryName(Cname);
                if (existingCategory) {
                    return res.status(409).json({
                        message: "La categoría con ese nombre ya existe. Por favor ingrese otro nombre.",
                    });
                }
                else {
                    yield category_1.categoryModal.createCategory(Cname);
                    res.status(200).json({ message: "Categoría creada exitosamente" });
                }
            }
            catch (error) {
                console.error("Error al crear la categoría: ", error);
                res.status(500).json({ error: "Error al crear la categoría" });
            }
        });
    },
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Cid } = req.params;
            const { Cname, Cstatus } = req.body;
            try {
                const category = yield category_1.categoryModal.readCategoryId(Number(Cid));
                if (!category) {
                    return res
                        .status(400)
                        .json({ message: `No existe la categoría con ID ${Cid}` });
                }
                console.log(req.body);
                yield category_1.categoryModal.updateCategory(Number(Cid), Cname, Number(Cstatus));
                res.status(200).json({ message: "Categoría actualizada exitosamente" });
            }
            catch (error) {
                console.error("Error al actualizar la categoría: ", error);
                res.status(500).json({ error: "Error al actualizar la categoría" });
            }
        });
    },
    deteleCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Cid } = req.params;
            try {
                const category = yield category_1.categoryModal.readCategoryId(Number(Cid));
                if (!category) {
                    return res.status(400).json({ message: `No existe la categoría con ID ${Cid}` });
                }
                console.log(req.params);
                yield category_1.categoryModal.deteleCategory(Number(Cid));
                res.status(200).json({ message: "Categoría eliminado exitosamente" });
            }
            catch (error) {
                console.error("Error al eliminado la categoría: ", error);
                res.status(500).json({ error: "Error al eliminado la categoría" });
            }
        });
    },
    readCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Cid } = req.params;
            console.log(req.params);
            try {
                const category = yield category_1.categoryModal.readCategoryId(Number(Cid));
                if (!category) {
                    return res.status(400).json({ message: `No existe la categoría con ID ${Cid}` });
                }
                const data = yield category_1.categoryModal.readIdDCategory(Number(Cid));
                console.log(data);
                res.status(200).json({ data, message: `Categoría con ID ${Cid} existe` });
            }
            catch (error) {
                console.error("Error al actualizar la categoría: ", error);
                res.status(500).json({ error: "Error al actualizar la categoría" });
            }
        });
    }
};

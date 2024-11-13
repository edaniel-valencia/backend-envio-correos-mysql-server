import { Request, Response } from "express";
import { categoryModal } from "../models/category";
import * as XLSX from "xlsx";
import connection from "../database/conexion";

export const CategoryController = {

    async readCategory(req: Request, res: Response) {
        try {
            const listCategory = await categoryModal.readCategory();

            if (listCategory.length === 0) {
                return res
                    .status(404)
                    .json({ message: "No se han encontrado categorías" });
            }
            res.json(listCategory);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al obtener categorías", error });
        }
    },

    async createCategory(req: Request, res: Response) {
        const { Cname } = req.body;
        console.log(req.body);


        try {

            // Verificar si la categoría ya existe
            const existingCategory = await categoryModal.readCategoryName(Cname);

            if (existingCategory) {
                return res.status(409).json({
                    message: "La categoría con ese nombre ya existe. Por favor ingrese otro nombre.",
                });
            } else {
                await categoryModal.createCategory(Cname);
                res.status(200).json({ message: "Categoría creada exitosamente" });
            }


        } catch (error) {
            console.error("Error al crear la categoría: ", error);
            res.status(500).json({ error: "Error al crear la categoría" });
        }
    },

    async updateCategory(req: Request, res: Response) {
        const { Cid } = req.params;
        const { Cname, Cstatus } = req.body;

        try {
            const category = await categoryModal.readCategoryId(Number(Cid));
            if (!category) {
                return res
                    .status(400)
                    .json({ message: `No existe la categoría con ID ${Cid}` });
            }
            console.log(req.body);
            await categoryModal.updateCategory(Number(Cid), Cname, Number(Cstatus));
            res.status(200).json({ message: "Categoría actualizada exitosamente" });
        } catch (error) {
            console.error("Error al actualizar la categoría: ", error);
            res.status(500).json({ error: "Error al actualizar la categoría" });
        }
    },

    async deteleCategory(req: Request, res: Response) {
        const { Cid } = req.params;

        try {
            const category = await categoryModal.readCategoryId(Number(Cid));
            if (!category) {
                return res.status(400).json({ message: `No existe la categoría con ID ${Cid}` });
            }
            console.log(req.params);
            await categoryModal.deteleCategory(Number(Cid));
            res.status(200).json({ message: "Categoría eliminado exitosamente" });
        } catch (error) {
            console.error("Error al eliminado la categoría: ", error);
            res.status(500).json({ error: "Error al eliminado la categoría" });
        }
    },

    async readCategoryId(req: Request, res: Response) {
       
        const { Cid } = req.params;
        console.log(req.params);

        try {
            const category = await categoryModal.readCategoryId(Number(Cid));
            if (!category) { return res.status(400).json({ message: `No existe la categoría con ID ${Cid}` }); }
            
            const data = await categoryModal.readIdDCategory(Number(Cid));
            console.log(data);
            
            res.status(200).json({data, message: `Categoría con ID ${Cid} existe` });
            
        } catch (error) {
            console.error("Error al actualizar la categoría: ", error);
            res.status(500).json({ error: "Error al actualizar la categoría" });
        }
    }

};

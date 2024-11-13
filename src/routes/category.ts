import { Router } from "express";
import { CategoryController } from "../controllers/category";

const router = Router();

router.get("/category/read", CategoryController.readCategory);
router.get("/category/readId/:Cid", CategoryController.readCategoryId);
router.post('/category/create', CategoryController.createCategory);
router.patch('/category/update/:Cid', CategoryController.updateCategory);
router.delete('/category/delete/:Cid', CategoryController.deteleCategory);


export default router
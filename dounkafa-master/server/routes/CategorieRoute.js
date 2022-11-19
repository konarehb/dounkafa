import express  from "express";
import { 
        getCategories,
        getCategorieById, 
        createCategorie,
        updateCategorie,
        deleteCategorie } from "../controllers/CategorieController.js";

const router = express.Router();
router.get('/categories',getCategories);
router.get('/categories/:id',getCategorieById);
router.post('/categories',createCategorie);
router.patch('/categories/:id',updateCategorie);
router.delete('/categories/:id',deleteCategorie);

export default router;
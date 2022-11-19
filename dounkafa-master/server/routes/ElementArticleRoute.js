import express  from "express";
import { 
        getElementArticle,
        getElementArticleById, 
        createElementArticle,
        updateElementArticle,
        deleteElementArticle } from "../controllers/ElementArticleController.js";

const router = express.Router();
router.get('/elementArticles/:id',getElementArticle);
router.get('/getElementArticleById/:id',getElementArticleById);
router.post('/elementArticles',createElementArticle);
router.patch('/elementArticles/:id',updateElementArticle);
router.delete('/elementArticles/:id',deleteElementArticle);

export default router;
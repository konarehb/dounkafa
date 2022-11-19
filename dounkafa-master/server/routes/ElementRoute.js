import express  from "express";
import { 
        getElements,
        getElementById, 
        createElement,
        updateElement,
        deleteElement } from "../controllers/ElementController.js";

const router = express.Router();
router.get('/elements',getElements);
router.get('/elements/:id',getElementById);
router.post('/elements',createElement);
router.patch('/elements/:id',updateElement);
router.delete('/elements/:id',deleteElement);

export default router;
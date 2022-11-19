import express  from "express";
import { 
        getMenuJour,
        getMenuJourById, 
        createMenuJour,
        updateMenuJour,
        deleteMenuJour } from "../controllers/MenuJourController.js";

const router = express.Router();
router.get('/menuJous',getMenuJour);
router.get('/menuJous/:id',getMenuJourById);
router.post('/menuJous',createMenuJour);
router.patch('/menuJous/:id',updateMenuJour);
router.delete('/menuJous/:id',deleteMenuJour);

export default router;
import express  from "express";
import { 
        getDetailCommandesByCommandeId,
        getDetailCommandeById, 
        createDetailCommande,
        updateDetailCommande,
        getDetailCommandeByIdCommande,
        deleteDetailCommande } from "../controllers/DetailCommandeController.js";

const router = express.Router();
router.get('/getDetailCommandesByCommandeId/:id',getDetailCommandesByCommandeId);
router.get('/deatailCommandes/:id',getDetailCommandeById);
router.post('/deatailCommandes',createDetailCommande);
router.patch('/deatailCommandes/:id',updateDetailCommande);
router.delete('/deatailCommandes/:id',deleteDetailCommande);
router.delete('/detailDeLaCommandes/:id',getDetailCommandeByIdCommande);

export default router;
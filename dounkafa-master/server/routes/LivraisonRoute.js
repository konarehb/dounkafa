import express  from "express";
import { 
        getLivraisons,
        getLivraisonById, 
        createLivraison,
        updateLivraison,
        deleteLivraison } from "../controllers/LivraisonController.js";

const router = express.Router();
router.get('/livraisons',getLivraisons);
router.get('/livraisons/:id',getLivraisonById);
router.post('/livraisons',createLivraison);
router.patch('/livraisons/:id',updateLivraison);
router.delete('/livraisons/:id',deleteLivraison);

export default router;
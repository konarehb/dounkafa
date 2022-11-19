import  express  from "express";
import {
            getPaiements,
            getPaiementById,
            createPaiement,
            updatePaiement,
            deletePaiement,
} from "../controllers/PaiementController.js";
const router = express.Router();
router.get('/paiements',getPaiements);
router.get('/paiements/:id',getPaiementById);
router.post('/paiements',createPaiement);
router.patch('/paiements/:id',updatePaiement);
router.delete('/paiements/:id',deletePaiement);

export default router;
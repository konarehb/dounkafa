import express  from "express";
import { 
        getCommandes,
        getVentes,
        getCommande,
        getCommandeById, 
        createCommande,
        updateCommande,
        deleteCommande,
        getCommandeOfClientId,
        changerStatutCommande
        } from "../controllers/CommandeController.js";

            const router = express.Router();
            router.get('/commandes',getCommandes);
            //======================
            router.get('/ventes',getVentes);
            router.get('/commande',getCommande);
            //======================
            router.get('/commandes/:id',getCommandeById);
            router.post('/commandes',createCommande);
            router.patch('/commandes/:id',updateCommande);
            router.delete('/commandes/:id',deleteCommande);
            router.get('/getCommandeOfClientId',getCommandeOfClientId);
            router.put('/changerStatutCommande/:id',changerStatutCommande);
            //router.get('/getClientCommandeByIdCommande/:id',getClientCommandeByIdCommande);
            
        export default router;
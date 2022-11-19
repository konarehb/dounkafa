import express  from "express";
import { 
        getClients,
        getClientById, 
        createClient,
        updateClient,
        deleteClient,
        incrementerPoint,
        clientRecherche } from "../controllers/ClientController.js";

const router = express.Router();
router.get('/clients',getClients);
router.get('/clients/:id',getClientById);
router.post('/clients',createClient);
router.patch('/clients/:id',updateClient);
router.delete('/clients/:id',deleteClient);
router.put('/incrementerPoint/:id',incrementerPoint);
router.get('/clientRecherche/:id',clientRecherche);

export default router;
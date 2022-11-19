import express  from "express";
import { getCompteOfClientId ,
            createCompte,
            getCompte} from "../controllers/CompteController.js";

const router = express.Router();
//router.get('/getCompteOfClientId/:id',getCompteOfClientId);
router.get('/getCompteOfClientId',getCompteOfClientId);
router.post('/createCompte',createCompte);
router.get('/getCompte',getCompte);


export default router;
import express  from "express";
import { createUser,
    getUser,
    //incrementerPoint,
    //changerStatutCommande
    } from "../controllers/UserController.js";
const router = express.Router();
router.post('/createUser',createUser);
router.get('/getUser',getUser);
// router.put('/incrementerPoint/:id',incrementerPoint);
// router.put('/changerStatutCommande/:id',changerStatutCommande);

export default router;
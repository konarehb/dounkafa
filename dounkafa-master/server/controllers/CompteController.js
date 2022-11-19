import Compte from "../models/CompteModel.js";
import User from "../models/UserModel.js";

export const createCompte = async(req,res)=>{
    try{
        
        await Compte.create(req.body);    
        res.status(201).json({msg:"client cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}

export const getCompte = async(req,res)=>{
    try{
        const response = await Compte.findAll();
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}

export const getCompteOfClientId = async(req,res)=>{
    try{
        const response = await Compte.findAll({
            include: [{
                model: User,
                // where: {
                //     id:req.params.id
                // }
            }]
            
        });
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
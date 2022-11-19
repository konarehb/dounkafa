import Paiement from "../models/PaiementModel.js";
import Commande from "../models/CommandeModel.js";
import Client from "../models/ClientModel.js";
export const getPaiements = async(req,res)=>{
    try{
        const response = await Paiement.findAll({
            include: [{
                model: Commande,

                include: [{
                    model: Client,
                }],
            }],
        });
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}

export const getPaiementById = async(req,res)=>{
    try{
        const response = await Paiement.findOne({
            where:{
                id:req.params.id
            }
            
        });
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}

export const createPaiement = async(req,res)=>{
    try{
        
        await Paiement.create(req.body);    
        res.status(201).json({msg:"paiement cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}

export const updatePaiement = async(req,res)=>{
    try{
        
        await Paiement.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"paiement updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deletePaiement = async(req,res)=>{
    try{
        
        await Paiement.destroy({
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"paiement deleted"});
    }catch(error)
    {
        console.log(error.message);
    }
}
import DetailCommnade from "../models/DetailCommandeModel.js";
import Commande from "../models/CommandeModel.js";
import Article from "../models/ArticleModel.js";
//import Client from "../models/ClientModel.js"

export const getDetailCommandesByCommandeId = async(req,res)=>{
    try{
        const response = await DetailCommnade.findAll({
            where: {
                commande_id:req.params.id
            },
            include: [{
                model: Commande,
            }],
            include: [{
                model: Article,
            }],
        });

        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
export const getDetailCommandeById = async(req,res)=>{
    try{
        const response = await DetailCommnade.findOne({
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

//============================================================
export const getDetailCommandeByIdCommande = async(req,res)=>{
    try{
        const response = await DetailCommnade.findAll({
            where:{
                commande:req.params.id
            }
            
        });
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
//===============================================================

export const createDetailCommande = async(req,res)=>{
    try{
        
        await DetailCommnade.create(req.body);    
        res.status(201).json({msg:"detail commande cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const updateDetailCommande = async(req,res)=>{
    try{
        
        await DetailCommnade.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"detail commande updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deleteDetailCommande = async(req,res)=>{
    try{
        
        await DetailCommnade.destroy({
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"detail commande deleted"});
    }catch(error)
    {
        console.log(error.message);
    }
}
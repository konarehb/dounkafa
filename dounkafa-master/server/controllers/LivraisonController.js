import Livraison from "../models/LivraisonModel.js";

export const getLivraisons = async(req,res)=>{
    try{
        const response = await Livraison.findAll();
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
export const getLivraisonById = async(req,res)=>{
    try{
        const response = await Livraison.findOne({
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

export const createLivraison = async(req,res)=>{
    try{
        
        await Livraison.create(req.body);    
        res.status(201).json({msg:"livraison cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const updateLivraison = async(req,res)=>{
    try{
        
        await Livraison.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"livraison updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deleteLivraison = async(req,res)=>{
    try{
        
        await Livraison.destroy({
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"client deleted"});
    }catch(error)
    {
        console.log(error.message);
    }
}
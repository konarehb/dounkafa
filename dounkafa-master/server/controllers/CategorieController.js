import Categorie from "../models/CategorieModel.js";

export const getCategories = async(req,res)=>{
    try{
        const response = await Categorie.findAll();
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
export const getCategorieById = async(req,res)=>{
    try{
        const response = await Categorie.findOne({
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

export const createCategorie = async(req,res)=>{
    try{
        
        await Categorie.create(req.body);    
        res.status(201).json({msg:"categorie cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const updateCategorie = async(req,res)=>{
    try{
        
        await Categorie.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"categorie updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deleteCategorie = async(req,res)=>{
    try{
        
        await Categorie.destroy({
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"categorie deleted"});
    }catch(error)
    {
        console.log(error.message);
    }
}
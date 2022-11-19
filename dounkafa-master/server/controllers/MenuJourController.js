import MenuJour from "../models/MenuJour.js";
import Article from "../models/ArticleModel.js";
import Categorie from "../models/CategorieModel.js";
export const getMenuJour = async(req,res)=>{
    try{
        const response = await MenuJour.findAll({
            include: [{
                model: Article,

                include: [{
                    model: Categorie,
                }],
            }],
        });
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
export const getMenuJourById = async(req,res)=>{
    try{
        const response = await MenuJour.findOne({
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

export const createMenuJour = async(req,res)=>{
    try{
        
        await MenuJour.create(req.body);    
        res.status(201).json({msg:"menu du jour cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const updateMenuJour = async(req,res)=>{
    try{
        
        await MenuJour.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"menu du jour updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deleteMenuJour = async(req,res)=>{
    try{
        
        await MenuJour.destroy({
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"menu du jour deleted"});
    }catch(error)
    {
        console.log(error.message);
    }
}
import ElementArticle from "../models/ElementArticleModel.js";
import Article from "../models/ArticleModel.js";
import Element from "../models/ElementModel.js";
export const getElementArticle = async(req,res)=>{
    try{
        const response = await ElementArticle.findAll({
            
            where: {
                article_id:req.params.id
            },
            include: [{
                model: Article,
            }],
            include: [{
                model: Element,
            }],
            
        });
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}

export const getElementArticleById = async(req,res)=>{
    try{
        const response = await ElementArticle.findOne({
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

export const createElementArticle = async(req,res)=>{
    try{
        
        await ElementArticle.create(req.body);    
        res.status(201).json({msg:"element article cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const updateElementArticle = async(req,res)=>{
    try{
        
        await ElementArticle.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"element article updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deleteElementArticle = async(req,res)=>{
    try{
        
        await ElementArticle.destroy({
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"element article deleted"});
    }catch(error)
    {
        console.log(error.message);
    }
}
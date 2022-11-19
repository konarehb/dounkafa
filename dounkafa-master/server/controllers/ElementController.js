import Element from "../models/ElementModel.js";

export const getElements = async(req,res)=>{
    try{
        const response = await Element.findAll();
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
export const getElementById = async(req,res)=>{
    try{
        const response = await Element.findOne({
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

export const createElement = async(req,res)=>{
    try{
        
        await Element.create(req.body);    
        res.status(201).json({msg:"element cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const updateElement = async(req,res)=>{
    try{
        
        await Element.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"element updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deleteElement= async(req,res)=>{
    try{
        
        await Element.destroy({
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"element deleted"});
    }catch(error)
    {
        console.log(error.message);
    }
}
import Client from "../models/ClientModel.js";
export const getClients = async(req,res)=>{
    try{
        const response = await Client.findAll();
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
export const getClientById = async(req,res)=>{
    try{
        const response = await Client.findOne({
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

export const createClient = async(req,res)=>{
    try{
        
        await Client.create(req.body);    
        res.status(201).json({msg:"client cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const updateClient = async(req,res)=>{
    try{
        
        await Client.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"client updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deleteClient = async(req,res)=>{
    try{
        
        await Client.destroy({
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
export const incrementerPoint = async(req,res)=>{
    try{
        const response = await Client.increment('point',{
            by: 10,
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
export const clientRecherche = async(req,res)=>{
    try{
        const response = await Client.findOne({
            where:{
                telephone_client:req.params.id
            }
            
        });
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
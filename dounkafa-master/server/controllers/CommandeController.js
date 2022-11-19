import Commande from '../models/CommandeModel.js';
import Client from '../models/ClientModel.js'
export const getCommandes = async(req,res)=>{
    try{
        const response = await Commande.findAll();
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
//====================================================
export const getCommande = async(req,res)=>{
    try{
        const response = await Commande.findAll({
            where:{
                statut_commande:'commande'
            }
        });
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}


// export const getVentes = async(req,res)=>{
//     try{
//         const response = await Commande.findAll({
//             where:{
//                 statut_commande:'vente'
//             }
//         });
//         res.status(200).json(response);
//     }catch(error)
//     {
//         console.log(error.message);
//     }
// }
//==================================================

export const getCommandeById = async(req,res)=>{
    try{
        const response = await Commande.findOne({
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
export const createCommande = async(req,res)=>{
    try{
        
        await Commande.create(req.body);    
        res.status(201).json({msg:"commande cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const updateCommande = async(req,res)=>{
    try{
        
        await Commande.update(req.body,{
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"commande updated"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const deleteCommande = async(req,res)=>{
    try{
        
        await Commande.destroy({
            where:{
                id:req.params.id
            }
        });    
        res.status(200).json({msg:"commande deleted"});
    }catch(error)
    {
        console.log(error.message);
    }
}
//========================================
export const getCommandeOfClientId = async(req,res)=>{
    try{
        const response = await Commande.findAll({
            where:{
                statut_commande:"commande"
            },
            include: [{
                model: Client,
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

export const getVentes = async(req,res)=>{
    try{
        const response = await Commande.findAll({
            where:{
                statut_commande:"vente"
            },
            include: [{
                model: Client,
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
//============================
export const changerStatutCommande = async(req,res)=>{
    try{
        const response = await Commande.update({
            statut_commande:"payee"
        },{
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
// export const getClientCommandeByIdCommande = async(req,res)=>{
//     try{
//         const response = await Commande.findOne({
//             where:{
//                 id:req.params.id
//             },
//             include: [{
//                 model: Client,
//             }]
            
//         });
//         res.status(200).json(response);
//     }catch(error)
//     {
//         console.log(error.message);
//     }
// }
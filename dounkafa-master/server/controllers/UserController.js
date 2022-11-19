import User from "../models/UserModel.js";
export const createUser = async(req,res)=>{
    try{
        
        await User.create(req.body);    
        res.status(201).json({msg:"user cree"});
    }catch(error)
    {
        console.log(error.message);
    }
}
export const getUser = async(req,res)=>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    }catch(error)
    {
        console.log(error.message);
    }
}
// export const changerStatutCommande = async(req,res)=>{
//     try{
//         const response = await User.update({
//             nomUser:"bouare"
//         },{
//             where:{
//                 id:req.params.id
//             }
//         });
//         res.status(200).json(response);
//     }catch(error)
//     {
//         console.log(error.message);
//     }
// }
// export const incrementerPoint = async(req,res)=>{
//     try{
//         const response = await User.increment('point',{
//             by: 2,
//             where:{
//                 id:req.params.id
//             }
//         });
//         res.status(200).json(response);
//     }catch(error)
//     {
//         console.log(error.message);
//     }
// }


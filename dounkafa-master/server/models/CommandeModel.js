import { Sequelize } from "sequelize";
import db from "../config/Database.js";
//import Client from "./ClientModel.js";
const {DataTypes} = Sequelize;
const Commande = db.define('commande',{
    date_commade:DataTypes.DATE,
    statut_commande:DataTypes.STRING
},
{
    freezeTableName:true
});
//==============
//Client.hasOne(Commande,{foreignKey:"client"})
//==================
export default Commande;
(async()=>{
    await db.sync();
})();

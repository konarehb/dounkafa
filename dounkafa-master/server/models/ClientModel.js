import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Commande from "./CommandeModel.js";

const {DataTypes} = Sequelize;
const Client = db.define('client',{
    nom_client:DataTypes.STRING,
    prenom_client:DataTypes.STRING,
    telephone_client:DataTypes.STRING,
    adresse_client:DataTypes.STRING,
    photo_client:DataTypes.STRING,
    point:DataTypes.INTEGER,
},
{
    freezeTableName:true
});
//===========
Client.hasMany(Commande,{foreignKey:'client_id'})
Commande.belongsTo(Client,{foreignKey:'client_id'})
//==============
export default Client;
(async()=>{
    await db.sync();
})();

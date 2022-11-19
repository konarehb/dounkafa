import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Commande from "./CommandeModel.js";
const{DataTypes} = Sequelize;

const Livraison = db.define('livraison',{
    nom_livreur:DataTypes.STRING,
    montant_total:DataTypes.INTEGER,
    data_livraison:DataTypes.DATE,
},
{
    freezeTableName:true
});
Commande.hasOne(Livraison,{foreignKey:"commande"});
export default Livraison;
(async()=>{
    await db.sync();
})();
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Commande from "./CommandeModel.js";

const {DataTypes} = Sequelize;
const Paiement = db.define('paiement',{
    date_paiement:DataTypes.DATE,
    mode_paiement:DataTypes.STRING
},

{
    freezeTableName:true
});
Commande.hasMany(Paiement,{foreignKey:'commande_id'})
Paiement.belongsTo(Commande,{foreignKey:'commande_id'})
export default Paiement;
(async()=>{
    await db.sync();
})();
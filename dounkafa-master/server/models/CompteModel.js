import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;
const Compte = db.define('compte',{
    dateCreation:DataTypes.DATE,

},
{
    freezeTableName:true
});
export default Compte;
(async()=>{
    await db.sync();
})();
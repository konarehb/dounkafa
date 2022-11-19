import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Compte from "./CompteModel.js";
const {DataTypes} = Sequelize;
const User = db.define('user',{
    nomUser:DataTypes.STRING,
    login:DataTypes.STRING,
    password:DataTypes.STRING,
    point:DataTypes.INTEGER,

},
{
    freezeTableName:true
});
User.hasMany(Compte,{foreignKey:'user_id'})
Compte.belongsTo(User,{foreignKey:'user_id'})
export default User;
(async()=>{
    await db.sync();
})();
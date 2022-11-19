import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Article from "./ArticleModel.js";
const {DataTypes} = Sequelize;
const MenuJour = db.define('menuJour',{
    date_menu_jour:DataTypes.DATE
    
},
{
    freezeTableName:true
});
Article.hasMany(MenuJour,{foreignKey:'article_id'})
MenuJour.belongsTo(Article,{foreignKey:'article_id'})
export default MenuJour;
(async()=>{
    await db.sync();
})();

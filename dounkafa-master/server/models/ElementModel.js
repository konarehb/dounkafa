import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ElementArticle from "./ElementArticleModel.js";

const {DataTypes} = Sequelize;
const Element = db.define('element',{
    designation:DataTypes.STRING,
    nom_element:DataTypes.STRING,
},
{
    freezeTableName:true
});
Element.hasMany(ElementArticle,{foreignKey:'element_id'})
ElementArticle.belongsTo(Element,{foreignKey:'element_id'})
export default Element;
(async()=>{
    await db.sync();
})();

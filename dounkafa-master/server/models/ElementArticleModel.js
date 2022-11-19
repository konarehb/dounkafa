import { Sequelize } from "sequelize";
import db from "../config/Database.js";
//import Element from "./ElementModel.js";
//import Article from "./ArticleModel.js";

const {DataTypes} = Sequelize;
const ElementArticle = db.define('elementArticle',{
    
},
{
    freezeTableName:true
});
// Element.hasOne(ElementArticle,{foreignKey:"element"});
// Article.hasOne(ElementArticle,{foreignKey:"article"});

export default ElementArticle;
(async()=>{
    await db.sync();
})();

import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ElementArticle from "./ElementArticleModel.js";
const {DataTypes} = Sequelize;
const Article = db.define('article',{
    photo:DataTypes.STRING,
    nom:DataTypes.STRING,
    designation:DataTypes.STRING,
    tva:DataTypes.FLOAT,
    prix_unitaire_ht:DataTypes.INTEGER,
    prix_ttc:DataTypes.FLOAT
},
{
    freezeTableName:true
});
Article.hasMany(ElementArticle,{foreignKey:'article_id'})
ElementArticle.belongsTo(Article,{foreignKey:'article_id'})
export default Article;
(async()=>{
    await db.sync();
})();

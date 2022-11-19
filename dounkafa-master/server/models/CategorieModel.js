import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Article from "./ArticleModel.js";

const {DataTypes} = Sequelize;
const Categorie = db.define('categorie',{
    nom_categorie:DataTypes.STRING,
},
{
    freezeTableName:true
});
Categorie.hasMany(Article,{foreignKey:'categorie_id'})
Article.belongsTo(Categorie,{foreignKey:'categorie_id'})
export default Categorie;
(async()=>{
    await db.sync();
})();

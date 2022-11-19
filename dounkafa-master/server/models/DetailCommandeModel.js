import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Commande from "./CommandeModel.js";
import Article from "./ArticleModel.js";

const {DataTypes} = Sequelize;
const DetailCommnade = db.define('deatailCommande',{
    quantite_article:DataTypes.INTEGER,
},
{
    freezeTableName:true
});
Article.hasMany(DetailCommnade,{foreignKey:'article_id'})
DetailCommnade.belongsTo(Article,{foreignKey:'article_id'})

Commande.hasMany(DetailCommnade,{foreignKey:'commande_id'})
DetailCommnade.belongsTo(Commande,{foreignKey:'commande_id'})

export default DetailCommnade;
(async()=>{
    await db.sync();
})();

import { Sequelize } from "sequelize";
const db = new Sequelize('dounkafaDB','admin','',{
    host:'localhost',
    dialect:'mysql',
    dialectOptions: {
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    }
});
export default db;
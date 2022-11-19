import express from "express"
import mysql from "mysql"
import ClientRoute from './routes/ClientRoute.js';
import CategorieRoute from './routes/CategorieRoute.js';
import ElementRoute from './routes/ElementRoute.js';
import ArticleRoute from './routes/ArticleRoute.js';
import CompteRoute from './routes/CompteRoute.js';
import UserRoute from './routes/UserRoute.js';
import CommandeRoute from './routes/CommandeRoute.js';
import DetailCommnadeRoute from "./routes/DetailCommandeRoute.js";
import PaiementRoute from './routes/PaiementRoute.js';
import LivraisonRoute from './routes/LivraisonRoute.js';
import MenuJourRoute  from './routes/MenuJourRoute.js';
import ElementArticleRoute from './routes/ElementArticleRoute.js';
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());
app.use(ClientRoute)
app.use(CategorieRoute)
app.use(ElementRoute)
app.use(ArticleRoute)
app.use(CompteRoute)
app.use(UserRoute)
app.use(CommandeRoute)
app.use(DetailCommnadeRoute)
app.use(PaiementRoute)
app.use(LivraisonRoute)
app.use(MenuJourRoute)
app.use(ElementArticleRoute)

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "dounkafaDB"
});

app.post('/login', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM users WHERE login = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err)
                res.send({err:err});
            if (result)
                res.send(result)
            else
                res.send({message: "Nom d'utilisateur ou mot de passe incorrect!"})
        }
    );
})

app.listen(5000,()=> console.log("Server is running..."));

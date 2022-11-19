import React,{ useState,useEffect} from "react";
//import React,{Component} from "react"
import { Link } from "react-router-dom";
import '../../App.css';
import axios from 'axios';
const ArticleList = ()=> {
    const [articles, setArticle] = useState([]);
    useEffect(()=>{
        getArticle();
    },[]);

const getArticle = async()=>{
    const response = await axios.get('http://localhost:5000/articles');
    setArticle(response.data);
}
        return(
            <div className="formListe">

            <div className="content-header">
                <h5>Liste des plats</h5>
                <div className='add-btn'>
                <Link to={`../plat/addArticle`} className="btn btn-success">Ajouter plat</Link>
                </div>
            </div>

            <div className="liste">
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Numéro</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Designation</th>
                            <th scope="col"> Categorie</th>
                            <th scope="col">Prix hors tax(f)</th>
                            <th scope="col">tva(%)</th>
                            <th scope="col">Prix total(f)</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {articles.map((article,index)=>(
                                <tr key={article.id}>
                                    <td>{index+1}</td>
                                    <td>{article.nom}</td>
                                    <td>{article.designation}</td>
                                    <td>{article.categorie.nom_categorie}</td>
                                    <td>{article.prix_unitaire_ht}</td> 
                                    <td>{article.tva}</td>
                                    <td>{article.prix_ttc}</td>                                
                                    <td>
                                        <Link to={`../plat/detailArticle/${article.id}`} className="btn btn-success">Detail</Link>
                                        <Link to={`../plat/editArticle/${article.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../plat/deleteArticle/${article.id}`} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
    };
export default ArticleList;
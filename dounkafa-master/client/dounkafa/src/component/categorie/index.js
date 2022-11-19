import React,{ useState,useEffect} from "react"
import { Link } from "react-router-dom";
import '../../App.css'
import axios from 'axios';

const CategorieList = ()=> {
    const [categories, setCategorie] = useState([]);
    useEffect(()=>{
        getCategories();
    },[]);

    const getCategories = async()=>{
        const response = await axios.get('http://localhost:5000/categories');
        setCategorie(response.data);
    }
    
    return(
        <div className="formListe">
            
            <div className="content-header">
                <h5>Liste des catégories</h5>
                <div className='add-btn'>
                    <Link to={`../categorie/addCategorie`} className="btn btn-success">Ajouter catégorie</Link>
                </div>
            </div>

            <div className="liste">
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Numéro</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((categorie,index)=>(
                                <tr key={categorie.id}>
                                    <td>{index+1}</td>
                                    <td>{categorie.nom_categorie}</td>
                                    <td>
                                        {/* <a href="editClient"><button className="btn btn-success">Edit</button></a> */}
                                        <Link to={`../categorie/editCategorie/${categorie.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../categorie/deleteCategorie/${categorie.id}`} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
};

export default CategorieList


import React,{ useState,useEffect} from "react"
import { Link } from "react-router-dom";
import '../../App.css'
import axios from 'axios';

const MenuList = ()=> {
    const [menus, setMenu] = useState([]);
    useEffect(()=>{
        getMenus();
    },[]);

const getMenus = async()=>{
    const response = await axios.get('http://localhost:5000/menuJous');
    setMenu(response.data);
}
    return(
        <div className="formListe">
            
            <div className="content-header">
                <h5>Liste des menus</h5>
                <div className='add-btn'>
                    <button className="btn btn-success">Ajouter menu</button>
                </div>
            </div>

            <div className="liste">
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Numero</th>
                            <th scope="col">Date</th>
                            <th scope="col">Nom de Plat</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Categorie</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map((menu,index)=>(
                                <tr key={menu.id}>
                                    <td>{index+1}</td>
                                    <td>{menu.date_menu_jour}</td>
                                    <td>{menu.article.nom}</td>
                                    <td>{menu.article.designation}</td>
                                    <td>{menu.article.prix_unitaire_ht}</td>
                                    <td>{menu.article.categorie.nom_categorie}</td>
                                    <td>
                                        <Link to={`../menu/editMenu/${menu.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../menu/deleteMenu/${menu.id}`} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
    };
export default MenuList;

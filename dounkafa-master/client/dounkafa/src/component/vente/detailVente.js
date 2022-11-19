import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import '../../App.css';
//const navigate = useNavigate();

const DetailVente = ()=> {
        //var somme = 0;
        const {id} = useParams();
        const [detailCommades, setElementArticle] = useState([]);
        useEffect(()=>{
            getElementArticle();
        },[]);

        const getElementArticle = async () =>{
            const response = await axios.get(`http://localhost:5000/getDetailCommandesByCommandeId/${id}`);
            setElementArticle(response.data);
        }
        return(
            <div className="formListe">
            <div className="div-btn-add">
                <Link to={`../vente/addDetailVente/${id}`} className="btn btn-success">Add</Link>
            </div>
            <div className="liste">
                <h3>Detail de la vente</h3>
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Numéro</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Quantite</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                     <tbody>
                        {detailCommades.map((detailCommade,index)=>(
                                <tr key={detailCommade.id}>
                                    <td>{index+1}</td>
                                    <td>{detailCommade.article.nom}</td>
                                    <td>{detailCommade.article.designation}</td>
                                    <td>{detailCommade.quantite_article}</td>
                                    <td>{detailCommade.article.prix_ttc}</td>
                                    {/* {(somme+=(detailCommade.article.prix_ttc)*detailCommade.quantite_article)} */}
                                    <td>
                                        <Link to={`../vente/editDetailVente/${detailCommade.id}&&${id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../vente/deleteDetailVente/${detailCommade.id}&&${id}`} className="btn btn-danger">Delete</Link>
                                    </td> 
                                    
                                </tr>
                                
                            ))}
                            {/* <tr>
                                <td colSpan={7}>Total:{somme}</td>
                            </tr> */}
                    </tbody> 
                </table>
            </div>
        </div>
        );
}
export default DetailVente;
import React,{ useState,useEffect} from "react"
import { Link } from "react-router-dom";
import '../../App.css'
import axios from 'axios';

const VenteList = ()=> {
    const [commandes, setVentes] = useState([]);
    //const [nom_client,setNom] = useState("");
    //const [prenom_client,setPrenom]= useState("");
    //const [telephone_client,setTel]= useState("");
    useEffect(()=>{
        getVentes();
       // getClientById();

    },[]);

    const getVentes = async()=>{
        const response = await axios.get('http://localhost:5000/ventes');
        setVentes(response.data);
    }
    return(
        <div className="formListe">
            <h5 className="content-header">Liste des ventes</h5>
            <div className="liste">
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                        <th scope="col">Numéro</th>
                            <th scope="col">Date</th>
                            <th scope="col"> nom client</th>
                            <th scope="col">prénom client</th>
                            <th scope="col">telephone client</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commandes.map((commande,index)=>(
                                <tr key={commande.id}>
                                    <td>{index+1}</td>
                                    <td>{commande.date_commade}</td>
                                    <td>{commande.client.nom_client}</td>
                                    <td>{commande.client.prenom_client}</td>
                                    <td>{commande.client.telephone_client}</td> 
                                    <td>
                                        <Link to={`../vente/editVente/${commande.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../vente/detailVente/${commande.id}`} className="btn btn-primary">Detail</Link>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
};
export default VenteList


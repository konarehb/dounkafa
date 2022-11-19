import React,{ useState,useEffect} from "react"
import { Link } from "react-router-dom";
import '../../App.css'
import axios from 'axios';

const CommandeList = ()=> {
    const [commandes, setCommande] = useState([]);
    const [nom_client,setNom] = useState("");
    const [prenom_client,setPrenom]= useState("");
    const [telephone_client,setTel]= useState("");
    useEffect(()=>{
        getCommandes();
        getClientById();

    },[]);

    const getCommandes = async()=>{
        const response = await axios.get('http://localhost:5000/getCommandeOfClientId');
        setCommande(response.data);
    }
    const getClientById = async(e)=>{
        const response = await axios.get(`http://localhost:5000/clients/${e}`)
        setNom(response.data.nom_client);
        setPrenom(response.data.prenom_client);
        setTel(response.data.telephone_client);
    }

    return(
        <div className="formListe">

            <div className="content-header">
                <h5>Liste des commandes</h5>
                <div className='add-btn'>
                    <Link to={`../commande/addCommande`} className="btn btn-success">Ajouter commande</Link>
                </div>
            </div>

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
                                        <Link to={`../commande/editCommande/${commande.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../commande/deleteCommande/${commande.id}`} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
};
export default CommandeList


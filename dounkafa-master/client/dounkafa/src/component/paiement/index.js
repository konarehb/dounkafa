import React,{ useState,useEffect} from "react"
import { Link } from "react-router-dom";
import '../../App.css'
import axios from 'axios';

const PaiementList = ()=> {
    const [paiements, setPaiements] = useState([]);
    useEffect(()=>{
        getPaiements();
    },[]);

    const getPaiements = async()=>{
        const response = await axios.get('http://localhost:5000/paiements');
        setPaiements(response.data);
    }
    return(
        <div className="formListe">

            <div className="content-header">
                <h5>Liste des paiements</h5>
                <div className='add-btn'>
                    <Link to={`../paiement/addPaiement`} className="btn btn-success">Ajouter paiement</Link>
                </div>
            </div>

            <div className="liste">
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                        <th scope="col">Numéro</th>
                            <th scope="col">Date paiement</th>
                            <th scope="col">Mode paiement</th>
                            <th scope="col">Date commande</th>
                            <th scope="col">Nom client</th>
                            <th scope="col">Prénom client</th>
                            <th scope="col">Téléphone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paiements.map((paiement,index)=>(
                                <tr key={paiement.id}>
                                    <td>{index+1}</td>
                                    <td>{paiement.date_paiement}</td>
                                    <td>{paiement.mode_paiement}</td>
                                    <td>{paiement.commande.date_commade}</td>
                                    <td>{paiement.commande.client.nom_client}</td>
                                    <td>{paiement.commande.client.prenom_client}</td>
                                    <td>{paiement.commande.client.telephone_client}</td>  
                                    {/* <td>
                                        <Link to={`../vente/editVente/${commande.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../vente/detailVente/${commande.id}`} className="btn btn-primary">Detail</Link>
                                    </td> */}
                                </tr>

                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
};

export default PaiementList


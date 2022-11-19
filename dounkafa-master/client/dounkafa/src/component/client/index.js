import React,{ useState,useEffect} from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import axios from 'axios';

const ClientList = ()=> {
    const [clients, setClient] = useState([]);
    //const [clientsReches, setClientRecherche] = useState([]);
    //const [champRecherche, setchampRecherche] = useState("");
    useEffect(()=>{
        getClients();
        //getrechercheClient();
    },[]);

const getClients = async()=>{
    const response = await axios.get('http://localhost:5000/clients');
    setClient(response.data);
}
// const getrechercheClient = async()=>{
//     const response = await axios.get(`http://localhost:5000/clientRecherche/${champRecherche}`);
//     setClientRecherche(response.data);
// }

    return(
        <div className="formListe">

            <div className="content-header">
                <h5>Liste des clients</h5>
                <div className='add-btn'>
                    <Link to={`../client/addClient`} className="btn btn-success">Ajouter client</Link>
                </div>
            </div>

            <div className="liste">
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Numéro</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">Numéro</th>
                            <th scope="col">Points</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client,index)=>(
                                <tr key={client.id}>
                                    <td>{index+1}</td>
                                    <td>{client.nom_client}</td>
                                    <td>{client.prenom_client}</td>
                                    <td>{client.adresse_client}</td>
                                    <td>{client.telephone_client}</td>
                                    <td>{client.point}</td>

                                    {/* const chemin=client.photo_client.split("\");
                                    const image = chemin[2];
                                    image? */}
                                    {/* <td><img src="/images/image1.png"  height={35} width={35} alt="new" /></td>  */}
                                    <td>{client.photo_client}</td>
                                    
                                    
                                    <td>
                                        {/* <a href="editClient"><button className="btn btn-success">Edit</button></a> */}
                                        <Link to={`../client/editClient/${client.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../client/deleteClient/${client.id}`} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
    };
export default ClientList;

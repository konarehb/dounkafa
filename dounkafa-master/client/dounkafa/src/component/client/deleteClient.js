//import React,{useState} from 'react';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router';
import { useNavigate, useParams, } from 'react-router';
import '../../App.css'
const DeleteClient = ()=>{
    const [nom_client,setNom] = useState("");
    const [prenom_client,setPrenom]= useState("");
    const [telephone_client,setTel]= useState("");
    const [adresse_client,setAdresse]= useState("");
    const [photo_client,setPhoto]= useState("");
    const {id} = useParams();
    const navigate = useNavigate();

     useEffect(()=>{
        getClientById();
     },[]);

    const getClientById = async () =>{
        const response = await axios.get(`http://localhost:5000/clients/${id}`);
        setNom(response.data.nom_client);
        setPrenom(response.data.prenom_client);
        setAdresse(response.data.adresse_client);
        setTel(response.data.telephone_client);
        setPhoto(response.data.photo_client);
    }
    const deleteClient= async (e)=>{
        //e.preventDefault();
        try{
            await axios.delete(`http://localhost:5000/clients/${id}`);
            navigate("/client/index", { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <form>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="nom">Nom</label>
                    <input type="text" className="form-control is-valid" 
                    value={nom_client}
                    onChange={(e)=>setNom(e.target.value)}
                    id="nom" required disabled />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="prenom">Prénom</label>
                    <input type="text" className="form-control is-valid" 
                    value={prenom_client} 
                    onChange={(e)=>setPrenom(e.target.value)}
                    id="prenom" required disabled/>
                    
                </div>
                <div className="col-md-4 mb-3">
                    <label for="adresse">Adrees</label>
                    <input type="text" className="form-control is-valid" 
                    value={adresse_client} 
                    onChange={(e)=>setAdresse(e.target.value)}
                    id="adresse" required disabled/>
                    
                </div>
                <div className="col-md-4 mb-3">
                    <label for="tel">Téléphone</label>
                    <input type="text" className="form-control is-valid" 
                    value={telephone_client}
                    onChange={(e)=>setTel(e.target.value)}
                     id="tel" required disabled/>                
                </div>
                <div className="col-md-4 mb-3">
                    <input type="file"
                        className="custom-file-input" 
                        accept=".png,.jpg,.jpeg" id="photo"
                        value={photo_client.toString} 
                        onChange={(e)=>setPhoto(e.target.value)} 
                        disabled/> 
                </div>
                <div className="col-md-4 mb-3">
                    <button onClick={()=>deleteClient(id)} type="submit" className="btn btn-danger pl-2">Delete</button>
            
                </div>
                
            </div>
        </form>
);


    //  const [clients, setClient] = useState([]);
    //  useEffect(()=>{
    //      getClients();
    //  },[]);

    //  const getClients = async()=>{
    //      const response = await axios.get('http://localhost:8889/clients');
    //      setClient(response.data);
    // }
}
export default DeleteClient;
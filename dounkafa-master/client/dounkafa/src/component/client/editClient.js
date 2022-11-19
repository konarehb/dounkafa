import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import '../../App.css'
const EditClient = ()=>{
    const [nom_client,setNom] = useState("");
    const [prenom_client,setPrenom]= useState("");
    const [telephone_client,setTel]= useState("");
    const [adresse_client,setAdresse]= useState("");
    const [point,setPoint]= useState("");
    const [photo_client,setPhoto]= useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getClientById();
    },[]);

    const updateClient= async (e)=>{
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/clients/${id}`,{
            nom_client,
            prenom_client,
            telephone_client,
            adresse_client,
            point,
            photo_client
            });
            navigate("/client/index", { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }

const getClientById = async () =>{
    const response = await axios.get(`http://localhost:5000/clients/${id}`);
    setNom(response.data.nom_client);
    setPrenom(response.data.prenom_client);
    setAdresse(response.data.adresse_client);
    setTel(response.data.telephone_client);
    setPoint(response.data.point);
    setPhoto(response.data.photo_client);
}
    return(
            <form onSubmit={updateClient}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="nom">Nom</label>
                        <input type="text" className="form-control is-valid" 
                        value={nom_client}
                        onChange={(e)=>setNom(e.target.value)}
                        id="nom" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="prenom">Prénom</label>
                        <input type="text" className="form-control is-valid" 
                        value={prenom_client} 
                        onChange={(e)=>setPrenom(e.target.value)}
                        id="prenom" required />
                        
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="adresse">Adrees</label>
                        <input type="text" className="form-control is-valid" 
                        value={adresse_client} 
                        onChange={(e)=>setAdresse(e.target.value)}
                        id="adresse" required />
                        
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="tel">Téléphone</label>
                        <input type="text" className="form-control is-valid" 
                        value={telephone_client}
                        onChange={(e)=>setTel(e.target.value)}
                         id="tel" required />                
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="point">Points</label>
                        <input type="number" className="form-control is-valid" 
                        value={point}
                        onChange={(e)=>setPoint(e.target.value)}
                         id="point" required />                
                    </div>
                    <div className="col-md-4 mb-3">
                        <input type="file"
                            className="custom-file-input" 
                            accept=".png,.jpg,.jpeg" id="photo"
                            value={photo_client.toString} 
                            onChange={(e)=>setPhoto(e.target.value)} 
                         /> 
                    </div>
                    <div className="col-md-4 mb-3">
                        <button type="submit" className="btn btn-primary pl-2">Apdate</button>
                    </div>
                    
                </div>
            </form>
    );
}
export default EditClient;
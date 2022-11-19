import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router';
import '../../App.css'
const AddClient = ()=>{
    const [nom_client,setNom] = useState("");
    const [prenom_client,setPrenom]= useState("");
    const [telephone_client,setTel]= useState("");
    const [adresse_client,setAdresse]= useState("");
    const [photo_client,setPhoto]= useState("");
    const navigate = useNavigate();

    const saveClient= async (e)=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/clients',{
            nom_client,
            prenom_client,
            telephone_client,
            adresse_client,
            photo_client
            });
           navigate("/client/index", { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }

    return(
            <form onSubmit={saveClient}>
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
                        <input type="file" className="custom-file-input" 
                        value={photo_client}
                        onChange={(e)=>setPhoto(e.target.value)} 
                        accept="/images/png,/images/jpg,/images/jpeg" id="photo" /> 
                    </div>
                    <div className="col-md-4 mb-3">
                        <button type="submit" className="btn btn-primary pl-2">Enregistrer</button>
                    </div>
                    
                </div>
            </form>
        // <div>
        //         <div className="divFormulaire">
        //             <form>
        //                 <div className="form-group col-form-label form-control-sm">
        //                     <div className="row mt-1 h-50">
        //                         <div className="col ">
        //                             <label htmlFor="nom">Nom</label> 
        //                         </div>
        //                         <div className="col">
        //                             <input type="text" className="form-control" id="nom" />
        //                         </div>    
        //                     </div>
        //                     <div className="row mt-1">
        //                         <div className="col">
        //                             <label htmlFor="prenom">Prénom</label>
        //                         </div>
        //                         <div className="col">
        //                             <input type="text" className="form-control" id="prenom" />
        //                         </div> 
        //                     </div>
        //                     <div className="row mt-1">
        //                         <div className="col">
        //                             <label htmlFor="adresse">Adresse</label>
        //                         </div>
        //                         <div className="col">
        //                             <input type="text" className="form-control" id="adresse" />
        //                         </div> 
        //                     </div>
        //                     <div className="row mt-1">
        //                         <div className="col">
        //                             <label htmlFor="numero">Numéro Tel</label> 
        //                         </div>
        //                         <div className="col">
        //                             <input type="text" className="form-control" id="numero" />
        //                         </div> 
        //                     </div>
        //                     <div className="row mt-1">
        //                         <div className="col">
        //                             <label htmlFor="photo">Photo</label> 
        //                         </div>
        //                         <div className="col">
        //                             <input type="image" alt="image" aria-labelledby="blabla" className="form-control-file" id="photo"/>
        //                         </div> 
        //                     </div>
        //                     <div className="row mt-1">
        //                         <div className="col">

        //                         </div>
        //                         <div className="col">
        //                             <input type="submit" className="btn btn-primary btnEnregistrer" text="Add"/>
        //                         </div>
        //                     </div>                           
        //                 </div>
        //             </form>

        //         </div>
        // </div>
    );
}

export default AddClient;
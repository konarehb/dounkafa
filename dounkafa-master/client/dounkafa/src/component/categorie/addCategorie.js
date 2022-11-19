import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router';
import '../../App.css'

const AddCategorie = ()=>{
    const [nom_categorie,setNom] = useState("");
    
    const navigate = useNavigate();

    const saveCategorie= async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/categories',{
            nom_categorie,
            });
           navigate("/categorie/index", { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }

    return(
            <form onSubmit={saveCategorie}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="nom_categorie">Nom</label>
                        <input type="text" className="form-control is-valid" 
                        value={nom_categorie}
                        onChange={(e)=>setNom(e.target.value)}
                        id="nom_categorie" required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <button type="submit" className="btn btn-primary pl-2">Enregistrer</button>
                    </div>
                    
                </div>
            </form>
    );
}
export default AddCategorie;
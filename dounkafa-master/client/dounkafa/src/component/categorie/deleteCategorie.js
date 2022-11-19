import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import '../../App.css'
const DeleteCategorie = ()=>{
    const [nom_categorie,setNom] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
   
    useEffect(()=>{
        getCategorieById();
    },[]);

    const deleteCategorie= async (e)=>{
         
        try{
            await axios.delete(`http://localhost:5000/categories/${id}`);
        }
        catch(error){
            console.log(error);
        }
        navigate("/categorie/index", { replace: false });
    }
    const getCategorieById = async () =>{
        const response = await axios.get(`http://localhost:5000/categories/${id}`);
        setNom(response.data.nom_categorie);
        
    }
    return(
        <form>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="nom_categorie">Nom</label>
                    <input type="text" className="form-control is-valid" 
                    value={nom_categorie}
                    onChange={(e)=>setNom(e.target.value)}
                    id="nom_categorie" disabled />
                </div>
                <div className="col-md-4 mb-3">
                <button onClick={()=>deleteCategorie(id)} type="submit" className="btn btn-danger pl-2">Delete</button>
                </div>
                
            </div>
        </form>
    );
};
export default DeleteCategorie;
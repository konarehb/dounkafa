import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import '../../App.css'
const EditCategorie = ()=>{
    const [nom_categorie,setNom] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getCategorieById();
    },[]);

    const updateCategorie= async (e)=>{
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/categories/${id}`,{
            nom_categorie,
            });
            navigate("/categorie/index", { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
    const getCategorieById = async () =>{
        const response = await axios.get(`http://localhost:5000/categories/${id}`);
        setNom(response.data.nom_categorie);
    }
    return(
        <form onSubmit={updateCategorie}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="nom_categorie">Nom</label>
                    <input type="text" className="form-control is-valid" 
                    value={nom_categorie}
                    onChange={(e)=>setNom(e.target.value)}
                    id="nom_categorie" required />
                </div>
                <div className="col-md-4 mb-3">
                    <button type="submit" className="btn btn-primary pl-2">Apdate</button>
                </div>
                
            </div>
        </form>
    );  
};
export default EditCategorie
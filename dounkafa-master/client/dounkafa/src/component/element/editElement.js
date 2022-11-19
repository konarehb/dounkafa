import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import '../../App.css'
const EditElement = ()=>{
    const [designation,setDesignation] = useState("");
    const [nom_element,setNom] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getElementById();
    },[]);

    const updateElement= async (e)=>{
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/elements/${id}`,{
                designation,
                nom_element,
            });
            navigate("/element/index", { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
    const getElementById = async () =>{
        const response = await axios.get(`http://localhost:5000/elements/${id}`);
        setDesignation(response.data.designation);
        setNom(response.data.nom_element);
    }
    return(
        <form onSubmit={updateElement}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="designation">Désignation</label>
                    <input type="text" className="form-control is-valid" 
                    value={designation}
                    onChange={(e)=>setDesignation(e.target.value)}
                    id="designation" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="nom_element">Nom</label>
                    <input type="text" className="form-control is-valid" 
                    value={nom_element}
                    onChange={(e)=>setNom(e.target.value)}
                    id="nom_element" required />
                </div>
                <div className="col-md-4 mb-3">
                    <button type="submit" className="btn btn-primary pl-2">Enregistrer</button>
                </div>
                
            </div>
        </form>
    );
};
export default EditElement;
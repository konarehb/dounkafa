import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import '../../App.css'

const DeleteElement = ()=>{
    const [designation,setDesignation] = useState("");
    const [nom_element,setNom] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getElementById();
    },[]);

    const DeleteElement = async (e)=>{
         
        try{
            await axios.delete(`http://localhost:5000/elements/${id}`);
        }
        catch(error){
            console.log(error);
        }
        navigate("/element/index", { replace: false });
    }

    const getElementById = async () =>{
        const response = await axios.get(`http://localhost:5000/elements/${id}`);
        setDesignation(response.data.designation);
        setNom(response.data.nom_element);
    }

    return(
        <form>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="designation">Désignation</label>
                    <input type="text" className="form-control is-valid" 
                    value={designation}
                    onChange={(e)=>setDesignation(e.target.value)}
                    id="designation" disabled />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="nom_element">Nom</label>
                    <input type="text" className="form-control is-valid" 
                    value={nom_element}
                    onChange={(e)=>setNom(e.target.value)}
                    id="nom_element" disabled />
                </div>
                <div className="col-md-4 mb-3">
                <button onClick={()=>DeleteElement(id)} type="submit" className="btn btn-danger pl-2">Delete</button>
                </div>
                
            </div>
        </form>
    );
};
export default DeleteElement;
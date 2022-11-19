import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import '../../App.css';

const AddDetailArticle = ()=> {
    const {id} = useParams();
    const navigate = useNavigate();
    const article_id=Number(id);
    const [element_id,setElementId] = useState("");
    
    const [elements, setElement] = useState([]);
    useEffect(()=>{
        getElements();
    },[]);
    const getElements = async()=>{
        const response = await axios.get('http://localhost:5000/elements');
        setElement(response.data);
    }

    const saveDetailArticle= async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/elementArticles',{
            article_id,
            element_id,
            });
           navigate(`/plat/detailArticle/${id}`, { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <form onSubmit={saveDetailArticle}>
            <div className="form-row">
            <div className="col-md-4 mb-3">
                    <label for="element">Element</label>
                    <select value={element_id} onChange={(e)=>setElementId(e.target.value)} className='form-select'>
                        <option></option>
                            {elements.map((element,index)=>( 
                            <option value={element.id} key={element.id}>{element.designation} && {element.nom_element} </option>
                        ))};
                        
                    </select>
                </div> 
                <div className="col-md-4 mb-3">
                    <button type="submit" className="btn btn-primary pl-2">Enregistrer</button>
                </div>
            </div>
        </form>
    );
};
export default AddDetailArticle;
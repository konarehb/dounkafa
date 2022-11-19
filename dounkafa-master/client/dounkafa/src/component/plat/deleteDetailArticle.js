import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import '../../App.css';

const DeleteDetailArticle = ()=> {
    const {id} = useParams();
    const elAr_id_article_id = id.split("&&");
    const elAr_id = elAr_id_article_id[0];
    const article_id_str = elAr_id_article_id[1];

    const navigate = useNavigate();
    const article_id=Number(article_id_str);
    const [element_id,setElementId] = useState("");
    const [elements, setElement] = useState([]);
    useEffect(()=>{
        getElements();
        getElementArticleById();
    },[]);

    const getElementArticleById = async () =>{
        const response = await axios.get(`http://localhost:5000/getElementArticleById/${elAr_id}`);
        setElementId(response.data.element_id);
        
    }

    const getElements = async()=>{
        const response = await axios.get('http://localhost:5000/elements');
        setElement(response.data);
    }

    const delateDetailArticle= async (e)=>{
        e.preventDefault();
        try{
            await axios.delete(`http://localhost:5000/elementArticles/${elAr_id}`);
           navigate(`/plat/detailArticle/${article_id_str}`, { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
   return(
        <form onSubmit={delateDetailArticle}>
            <div className="form-row">
            <div className="col-md-4 mb-3">
                    <label for="element">Element</label>
                    <select value={element_id} onChange={(e)=>setElementId(e.target.value)} className='form-select' disabled>
                        <option></option>
                            {elements.map((element,index)=>( 
                            <option value={element.id} key={element.id}>{element.designation} && {element.nom_element} </option>
                        ))};
                        
                    </select>
                </div> 
                <div className="col-md-4 mb-3">
                    <button type="submit" className="btn btn-primary pl-2">Supprimer</button>
                </div>
            </div>
        </form>
   );
};
export default DeleteDetailArticle;
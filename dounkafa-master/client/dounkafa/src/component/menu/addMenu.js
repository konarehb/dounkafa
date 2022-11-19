import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import '../../App.css';

const AddMenu = ()=> {
    const navigate = useNavigate();
    const [article_id,setArticleId] = useState("");
    const [date_menu_jour,setDateMenu] = useState("");
    const [articles, setArticle] = useState([]);

    useEffect(()=>{
        getArticle();
    },[]);
    const getArticle = async()=>{
        const response = await axios.get('http://localhost:5000/articles');
        setArticle(response.data);
    }

    const saveMenu= async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/menuJous',{
                date_menu_jour,
                article_id
            });
           navigate('/menu/index', { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <form onSubmit={saveMenu}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="element">Element</label>
                    <select value={article_id} onChange={(e)=>setArticleId(e.target.value)} className='form-select'>
                        <option></option>
                            {articles.map((article,index)=>( 
                            <option value={article.id} key={article.id}>Nom:{article.nom} && designation:{article.designation} && prix:{article.prix_ttc} && categorie:{article.categorie.nom_categorie} </option>
                        ))};
                        
                    </select>
                </div> 
                <div className="col-md-4 mb-3">
                    <label for="date">Date du jour</label>
                    <input type="date" className="form-control is-valid" 
                    value={date_menu_jour}
                    onChange={(e)=>setDateMenu(e.target.value)}
                    id="date" required />
                </div>
                <div className="col-md-4 mb-3">
                    <button type="submit" className="btn btn-primary pl-2">Enregistrer</button>
                </div>
            </div>
        </form>
    );
};
export default AddMenu;
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import '../../App.css';

const EditDetailVente = ()=> {
    const {id} = useParams();
    const elAr_id_article_id = id.split("&&");
    const detCom_id = elAr_id_article_id[0];
    const commande_id_str = elAr_id_article_id[1];
    
    const navigate = useNavigate();
    const commande_id=Number(commande_id_str);
    const [article_id,setArticleId] = useState("");
    const [quantite_article,setQuantite_article] = useState("");
    
    const [articles, setArticle] = useState([]);
    useEffect(()=>{
        getArticle();
        getDetailCommandeById();
    },[]);

    const getDetailCommandeById = async () =>{
        const response = await axios.get(`http://localhost:5000/deatailCommandes/${detCom_id}`);
        setArticleId(response.data.article_id);
        setQuantite_article(response.data.quantite_article);
        
    }

    const getArticle = async()=>{
        const response = await axios.get('http://localhost:5000/articles');
        setArticle(response.data);
    }

    const editDetailVente= async (e)=>{
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/deatailCommandes/${detCom_id}`,{
            quantite_article,
            article_id,
            commande_id,
            });
           navigate(`/vente/detailVente/${commande_id_str}`, { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <form onSubmit={editDetailVente}>
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
                    <label for="quantite">Quantite</label>
                    <input type="number" className="form-control is-valid" 
                    value={quantite_article}
                    onChange={(e)=>setQuantite_article(e.target.value)}
                    id="quantite" required />
                </div>
                <div className="col-md-4 mb-3">
                    <button type="submit" className="btn btn-primary pl-2">Modifier</button>
                </div>
            </div>
        </form>
    );
};
export default EditDetailVente;
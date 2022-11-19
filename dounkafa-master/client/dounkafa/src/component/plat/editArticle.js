import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,useParams} from 'react-router';
import '../../App.css'

const EditArticle = ()=>{
    const [nom,setNom] = useState("");
    const [designation,setDesignation]= useState("");
    const [photo,setPhoto]= useState("");
    const [tva,setTva]= useState("");
    const [prix_unitaire_ht,setPrix_unitaire_ht]= useState("");
    const [categorie_id,setCategorie_id]= useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const [categories, setCategorie] = useState([]);
    useEffect(()=>{
        getCategories();
        getArticleById();
    },[]);

    const getArticleById = async () =>{
        const response = await axios.get(`http://localhost:5000/articles/${id}`);
        setNom(response.data.nom);
        setDesignation(response.data.designation);
        setPrix_unitaire_ht(response.data.prix_unitaire_ht);

        setTva(response.data.tva);
        setCategorie_id(response.data.categorie_id);
        setPhoto(response.data.photo);
    }
    const getCategories = async()=>{
        const response = await axios.get('http://localhost:5000/categories');
        setCategorie(response.data);
    }


    const editArticle= async (e)=>{
        e.preventDefault();
        var prix_ttc = Number(tva)*Number(prix_unitaire_ht)/100 + Number(prix_unitaire_ht);
        try{
            await axios.patch(`http://localhost:5000/articles/${id}`,{
            nom,
            photo,
            designation,
            tva,
            prix_unitaire_ht,
            prix_ttc,
            categorie_id
            });
           navigate("/plat/index", { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <form onSubmit={editArticle}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="nom">Nom plat</label>
                    <input type="text" className="form-control is-valid" 
                    value={nom}
                    onChange={(e)=>setNom(e.target.value)}
                    id="nom" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="designation">Designation</label>
                    <input type="text" className="form-control is-valid" 
                    value={designation}
                    onChange={(e)=>setDesignation(e.target.value)}
                    id="designation" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="prix_unitaire_ht">Prix unitaire</label>
                    <input type="number" className="form-control is-valid" 
                    value={prix_unitaire_ht}
                    onChange={(e)=>setPrix_unitaire_ht(e.target.value)}
                    id="prix_unitaire_ht" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="tva">TVA</label>
                    <input type="number" className="form-control is-valid" 
                    value={tva}
                    onChange={(e)=>setTva(e.target.value)}
                    id="tva" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="client">Categorie</label>
                    <select value={categorie_id} onChange={(e)=>setCategorie_id(e.target.value)} className='form-select'>
                        <option></option>
                            {categories.map((categorie,index)=>( 
                            <option value={categorie.id} key={categorie.id}> {categorie.nom_categorie}</option>
                        ))};
                        
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                        <input type="file" className="custom-file-input" 
                        value={photo}
                        onChange={(e)=>setPhoto(e.target.value)} 
                        accept="/images/png,/images/jpg,/images/jpeg" id="photo" /> 
                </div> 
                <div className="col-md-4 mb-3">
                    <button type="submit" className="btn btn-primary pl-2">Enregistrer</button>
                </div>
                
            </div>
        </form>
    );
};
export default EditArticle;
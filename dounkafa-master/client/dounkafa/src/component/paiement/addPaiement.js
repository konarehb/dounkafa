import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import '../../App.css';

const AddPaiement = ()=> {
    const navigate = useNavigate();
    const [commande_id,setCommandeId] = useState("");
    const [mode_paiement,setModePaiement] = useState("espece");
    const [date_paiement,setDatePaiement] = useState("");
    const [commandes, setCommande] = useState([]);

    useEffect(()=>{
        getCommande();
    },[]);
    const getCommande = async()=>{
        const response = await axios.get('http://localhost:5000/ventes');
        setCommande(response.data);
    }
    const savePaiement= async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/paiements',{
                date_paiement,
                mode_paiement,
                commande_id
            });
            const response = await axios.get(`http://localhost:5000/commandes/${commande_id}`);
            const client = response.data.client_id;
            await axios.put(`http://localhost:5000/changerStatutCommande/${commande_id}`);
            await axios.put(`http://localhost:5000/incrementerPoint/${client}`);
            navigate('/paiement/index', { replace: true });
        }
        catch(error){
            console.log(error);
        }
             
    }
    return(
        <form onSubmit={savePaiement}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="element">Vente à payer</label>
                    <select value={commande_id} onChange={(e)=>setCommandeId(e.target.value)} className='form-select'>
                        <option></option>
                            {commandes.map((commande,index)=>( 
                            <option value={commande.id} key={commande.id}>Date:{commande.date_commade}&&Client:{commande.client.nom_client} {commande.client.prenom_client}&&Tel:{commande.client.telephone_client}</option>
                        ))};
                        
                    </select>
                </div> 

                <div className="col-md-4 mb-3">
                    <label for="element">Mode de paiment</label>
                    <select value={mode_paiement} onChange={(e)=>setModePaiement(e.target.value)} className='form-select'>
                        <option value="espece">Espece</option>
                        <option value="trasfere">Transfere</option>
                    </select>
                </div>

                <div className="col-md-4 mb-3">
                    <label for="date">Date du paiment</label>
                    <input type="date" className="form-control is-valid" 
                    value={date_paiement}
                    onChange={(e)=>setDatePaiement(e.target.value)}
                    id="date" required />
                </div>
                <div className="col-md-4 mb-3">
                    <button type="submit" className="btn btn-primary pl-2">Enregistrer</button>
                </div>
            </div>
        </form>
    );
};

export default AddPaiement;
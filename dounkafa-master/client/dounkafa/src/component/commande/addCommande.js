import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router';
import '../../App.css'

const AddCommande = ()=>{
    const [date_commade,setDate] = useState("");
    const [statut_commande,setStatutCommade]= useState("commande");
    const [client_id,setClientCommade]= useState(null);
    const navigate = useNavigate();

    const [clients, setClient] = useState([]);
    useEffect(()=>{
        getClients();
    },[]);
    const getClients = async()=>{
        const response = await axios.get('http://localhost:5000/clients');
        setClient(response.data);
    }


    const saveCommande= async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/commandes',{
            date_commade,
            statut_commande,
            client_id,
            });
           navigate("/commande/index", { replace: true });
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <form onSubmit={saveCommande}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="date">Date de commandes</label>
                    <input type="date" className="form-control is-valid" 
                    value={date_commade}
                    onChange={(e)=>setDate(e.target.value)}
                    id="date" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="client">Commande ou vente</label>
                    <select value={statut_commande} onChange={(e)=>setStatutCommade(e.target.value)} className='form-select'>
                        <option value="commande">Commande</option>
                        <option value="vente">Vente</option>
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="client">Client</label>
                    <select value={client_id} onChange={(e)=>setClientCommade(e.target.value)} className='form-select'>
                        <option></option>
                            {clients.map((client,index)=>( 
                            <option value={client.id} key={client.id}> {client.nom_client}  {client.prenom_client} {client.telephone_client}</option>
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
export default AddCommande;
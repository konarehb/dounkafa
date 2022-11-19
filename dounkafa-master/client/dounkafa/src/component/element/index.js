import React,{ useState,useEffect} from "react"
import { Link } from "react-router-dom";
import '../../App.css'
import axios from 'axios';

const ElementList = ()=> {
    const [elements, setElement] = useState([]);
    useEffect(()=>{
        getElements();
    },[]);

    const getElements = async()=>{
        const response = await axios.get('http://localhost:5000/elements');
        setElement(response.data);
    }
    return(
        <div className="formListe">
            <div className="div-btn-add">
                
            </div>

            <div className="content-header">
                <h5>Liste des produits</h5>
                <div className='add-btn'>
                    <Link to={`../element/addElement`} className="btn btn-success">Ajouter produit</Link>
                </div>
            </div>

            <div className="liste">
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Numéro</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements.map((element,index)=>(
                                <tr key={element.id}>
                                    <td>{index+1}</td>
                                    <td>{element.designation}</td>
                                    <td>{element.nom_element}</td>
                                    <td>
                                        <Link to={`../element/editElement/${element.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../element/deleteElement/${element.id}`} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
};
export default ElementList


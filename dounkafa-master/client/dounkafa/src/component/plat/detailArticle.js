import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate, useParams, } from 'react-router';
import '../../App.css';
//const navigate = useNavigate();

const DetailArticle = ()=> {
        const {id} = useParams();
        const [elementArticles, setElementArticle] = useState([]);
        useEffect(()=>{
            getElementArticle();
        },[]);

        const getElementArticle = async () =>{
            const response = await axios.get(`http://localhost:5000/elementArticles/${id}`);
            setElementArticle(response.data);
        }
        return(
            <div className="formListe">
            <div className="div-btn-add">
                <Link to={`../plat/addDetailArticle/${id}`} className="btn btn-success">Add</Link>
            </div>
            <div className="liste">
                 <h3>Detail de plat</h3>
                <table className="table table-striped table-bordered table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Numéro</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementArticles.map((elementArticle,index)=>(
                                <tr key={elementArticle.id}>
                                    <td>{index+1}</td>
                                    <td>{elementArticle.element.nom_element}</td>
                                    <td>{elementArticle.element.designation}</td>
                                    <td>
                                        <Link to={`../plat/editDetailArticle/${elementArticle.id}&&${id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`../plat/deleteDetailArticle/${elementArticle.id}&&${id}`} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
}
export default DetailArticle;
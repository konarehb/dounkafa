import React from 'react';
import './App.css';
import logo from './logo.png';
import Login from './Login';
import ReactDOM from 'react-dom/client';
import Categorie from './component/categorie';
import Element from './component/element';
import Paiement from './component/paiement';
import DetailCommande from './component/detailCommande';
import ElementPlat from './component/elementPlat';
import Home from './component/home';
import Menu from './component/menu';
import Vente from './component/vente';
import Commande from './component/commande';
import Client from './component/client';
import Plat from './component/plat';
import {Route,Link,BrowserRouter as Router, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddClient from './component/client/addClient';
import EditClient from './component/client/editClient';
import DeleteClient from './component/client/deleteClient';
import AddCategorie from './component/categorie/addCategorie';
import EditCategorie from './component/categorie/editCategorie';
import DeleteCategorie from './component/categorie/deleteCategorie';
import AddElement from './component/element/addElement';
import EditElement from './component/element/editElement';
import DeleteElement from './component/element/deleteElement';
import AddCommande from './component/commande/addCommande';
import EditCommande from './component/commande/editCommande';
import DeleteCommande from './component/commande/deleteCommande';
import EditVente from './component/vente/editVente';
import DetailVente from './component/vente/detailVente';
import AddArticle from './component/plat/addArticle';
import EditArticle from './component/plat/editArticle';
import DeleteArticle from './component/plat/deleteArticle';
import DetailArticle from './component/plat/detailArticle';
import AddDetailArticle from './component/plat/addDetailArticle';
import EditDetailArticle from './component/plat/editDetailArticle';
import DeleteDetailArticle from './component/plat/deleteDetailArticle';
import AddDetailVente from './component/vente/addDetailVente';
import EditDetailVente from './component/vente/editDetailVente';
import DeleteDetailVente from './component/vente/deleteDetailVente';
import AddMenu from './component/menu/addMenu';
import EditMenu from './component/menu/editMenu';
import DeleteMenu from './component/menu/deleteMenu';
import AddPaiement from './component/paiement/addPaiement';

function App() {

  const logout = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Login />
        </React.StrictMode>
    );
  };

  return (

    <div className="App">
      
      <Router>
    
      <nav className='navbar navbar-expand'>

        <div className='navbar'>

          <a href='/'>
            <img className='logo' src={logo}/>
          </a>

          <div className='navbar-right'>

            <ul className='navbar-nav'>
              <li>
                <Link className='nav-link' to="/home">Accueil</Link>
              </li>
              <li>
                <Link className='nav-link' to="/menu/index">Menus</Link>
              </li>
              <li>
                <Link className='nav-link' to="/categorie/index">Catégories</Link>
              </li>
              <li>
                <Link className='nav-link' to="/plat/index">Plats</Link>
              </li>
              <li>
                <Link className='nav-link' to="/element/index">Produits</Link>
              </li>
              <li>
                <Link className='nav-link' to="/paiement/index">Paiements</Link>
              </li>
              <li>
                <Link className='nav-link' to="/client/index">Clients</Link>
              </li>
              <li>
                <Link className='nav-link' to="/commande/index">Commandes</Link>
              </li>
              <li>
                <Link className='nav-link' to="/vente/index">Ventes</Link>
              </li>
            </ul>  

          </div>

          <div className='logout-btn'>
            <button className="btn btn-primary pl-2" onClick={logout}>Logout</button>
          </div>

        </div>
        
      </nav>

      <div className="m-5">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categorie/index' element={<Categorie />} />
          <Route path='/element/index' element={<Element />} />
          <Route path='/paiement/index' element={<Paiement />} />
          <Route path='/detailCommande/index' element={<DetailCommande />} />
          <Route path='/elementPlat/index' element={<ElementPlat />} /> 
          <Route path='/menu/index' element={<Menu />} />
          <Route path='/client/index' element={<Client />} />
          <Route path='/client/addClient' element={<AddClient/>} />
          <Route path='/client/editClient/:id' element={<EditClient/>} />
          <Route path='/client/deleteClient/:id' element={<DeleteClient/>} />
          <Route path='/categorie/addCategorie' element={<AddCategorie/>} />
          <Route path='/categorie/editCategorie/:id' element={<EditCategorie/>} />
          <Route path='/categorie/deleteCategorie/:id' element={<DeleteCategorie/>} />
          <Route path='/element/addElement' element={<AddElement/>} />
          <Route path='/element/editElement/:id' element={<EditElement/>} />
          <Route path='/element/deleteElement/:id' element={<DeleteElement/>} />
          <Route path='/commande/addCommande' element={<AddCommande/>} />
          <Route path='/commande/index' element={<Commande />} />
          <Route path='/commande/editCommande/:id' element={<EditCommande/>} />
          <Route path='/commande/deleteCommande/:id' element={<DeleteCommande/>} />
          <Route path='/vente/editVente/:id' element={<EditVente/>} />
          <Route path='/vente/detailVente/:id' element={<DetailVente/>} />
          <Route path='/vente/index' element={<Vente />} />
          <Route path='/plat/index' element={<Plat />} />
          <Route path='/plat/addArticle' element={<AddArticle />} />
          <Route path='/plat/editArticle/:id' element={<EditArticle />} />
          <Route path='/plat/deleteArticle/:id' element={<DeleteArticle />} />
          <Route path='/plat/detailArticle/:id' element={<DetailArticle />} />
          <Route path='/plat/addDetailArticle/:id' element={<AddDetailArticle />} />
          <Route path='/plat/editDetailArticle/:id' element={<EditDetailArticle />} />
          <Route path='/plat/deleteDetailArticle/:id' element={<DeleteDetailArticle/>} />
          <Route path='/vente/addDetailVente/:id' element={<AddDetailVente/>} />
          <Route path='/vente/editDetailVente/:id' element={<EditDetailVente/>} />
          <Route path='/vente/deleteDetailVente/:id' element={<DeleteDetailVente/>} />
          <Route path='/menu/addMenu' element={<AddMenu/>} />
          <Route path='/menu/editMenu/:id' element={<EditMenu/>} />
          <Route path='/menu/deleteMenu/:id' element={<DeleteMenu/>} />
          <Route path='/paiement/addPaiement' element={<AddPaiement/>} />
        </Routes>       
      </div>

    </Router>

    </div>
  );
}
export default App;

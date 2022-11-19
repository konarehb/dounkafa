import React, { useState} from "react";
import Axios from "axios";
import App from './App';
import ReactDOM from 'react-dom/client';
import "./Login.css"
import logo from './logo.png';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        // Axios.post("http://localhost:3001/login", {
        //     username: username,
        //     password: password
        // }).then((response) => {
        //     console.log(response);
        // })
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
       );
    };

    return (
        <div className="content">
            <div className="login">
                <a href='/'>
                    <img className='login-logo' src={logo}/>
                </a>
                <div className="elements">
                    <input type="text" required placeholder="Nom d'utilisateur"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}/>
                    <input type="password" required placeholder="Mot de passe"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    <div className='login-btn'>
                        <button className="btn btn-primary pl-2" 
                        onClick={login}>Se Connecter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
import React,  { useState } from 'react';
import AxiosCenter from '../services/AxiosCenter';
import {NavLink} from 'react-router-dom';
import Loader from 'react-loader-spinner';
const Connexion = ({onLogin, history}) => {

const [identifiants, setIdentifiants] = useState({username : "", password : ""})
const [error, setError] = useState("");
const [loader,setLoader] = useState(false);

// Gestion des input email et password
function handleChange (event) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setIdentifiants({...identifiants, [name] : value })
 
}

// Gestion du submit
 const handleSubmit = async event => {
     event.preventDefault();
     setError("");
    
     try {
        
        setLoader(true);
        await AxiosCenter.Authentification(identifiants);
        setLoader(false);
        setError("");
        onLogin(true);
        history.replace("/")
    } catch (error) { 
        
        setLoader(false);
        setError("Les informations de l'utilisateur email et/ou password ne sont pas correctes !");
        console.log(error.response);
          }
        };


    return ( 
     <>
        
        <div className="container-fluid p-5">
            
            <h2 className="text-uppercase" style = {{color:"black"}}> MON COMPTE </h2>
            <div className="row">
                <div className="col-6 pt-1">
                    <h6 className = "text-uppercase pt-4" style = {{color : "black"}}> se connecter à votre compte</h6>
                    <form onSubmit={handleSubmit} >
                            <div className="form-group pt-3">
                                <label htmlFor="username">Adresse Email </label>
                                <input name="username" value = {identifiants.username} id="username" type="email" onChange={handleChange} placeholder= "Veuillez entrez votre adresse email" className="form-control w-75" required/>
                                
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input name = "password" value={identifiants.password} type="password" onChange={handleChange}  placeholder= "Veuillez entrez votre mot de passe" className="form-control w-75" required/>
                                {error && <p className="mt-2 mb-2" style={{color:"red", fontSize:"0.8rem"}}> {error}</p>}
                            </div>
                            <button type="submit" className="btnConnexion">Connexion 
                                <i className="bi bi-arrow-right ml-2"></i>
                                {loader && <Loader className="ml-2 d-inline-block" type="ThreeDots" color="black" height={20} width={20}/>}
                            </button>
                    </form>
                </div>
                <div className="col-6 pt-1">
                    <h6 className="text-uppercase pt-4" style = {{color:"black"}}> Pas encore Inscris ?</h6>
                    <p className = "pt-3" style = {{fontSize : "medium"}}> Un identifiant vous permettra de :</p>
                        <ul className="list-group">
                            <li className="list-group-item border-0 p-1">
                                <i className="bi bi-check2" style={{fontSize :"1rem", color:"green"}}></i>
                                <span style = {{fontSize :"0.9rem"}}> Passer une commande et ainsi de profiter d'un cadre personnalisé</span>
                            </li>
                            <li className="list-group-item border-0 p-1">
                                <i className="bi bi-check2" style={{fontSize :"1rem", color:"green"}}></i>
                                <span style = {{fontSize :"0.9rem"}}> Visualiser vos historiques de commandes</span>
                            </li>
                            <li className="list-group-item border-0 p-1">
                                <i className="bi bi-check2" style={{fontSize :"1rem", color:"green"}}></i>
                                <span style = {{fontSize :"0.9rem"}}> Modifier vos informations enregistrées</span>
                            </li>
                        </ul>
                        <NavLink to="/inscriptionbis"> 
                            <button type="button" className="btnConnexion mt-4"> Creer un compte 
                                <i  style={{fontSize :"1rem"}} className="bi bi-lock-fill ml-1"></i>
                            </button>    
                        </NavLink>
                </div>
            </div>
        </div>
        
    </>    
  );
}
 
export default Connexion;
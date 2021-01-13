import React,  { useState } from 'react';
import AxiosCenter from '../services/AxiosCenter';
const Connexion = ({onLogin, history}) => {

const [identifiants, setIdentifiants] = useState({username : "", password : ""})
const [error, setError] = useState("");

// Gestion des input email et password
function handleChange (event) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setIdentifiants({...identifiants, [name] : value })
 
}
// Gestion du submit
 const handleSubmit = async event => {
     event.preventDefault();
     try {
        await AxiosCenter.Authentification(identifiants);
        console.log(error)
        setError("");
        onLogin(true);
        history.replace("/")
    } catch (error) {setError("Les informations de l'identifiants ne sont pas correctes !");
          }
        };


    return ( 
        <div className="container-fluid p-5">
            
            <h2 className="text-uppercase" style = {{color:"black"}}> MON COMPTE </h2>
            <div className="row">
                <div className="col-6 pt-1">
                    <h6 className = "text-uppercase pt-4" style = {{color : "#1835C3"}}> se connecter à votre compte</h6>
                    <form onSubmit={handleSubmit} >
                            <div className="form-group pt-3">
                                <label htmlFor="username">Adresse Email </label>
                                <input name="username" value = {identifiants.username} id="username" type="email" onChange={handleChange} placeholder= "Veuillez entrez votre adresse email" className={"form-control w-75" + (error && " is-invalid")}/>
                                {error && <p className="invalid-feedback"> {error}</p>}
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input name = "password" value={identifiants.password} type="password" onChange={handleChange}  placeholder= "Veuillez entrez votre mot de passe" className="form-control w-75"/>
                            </div>
                            <button type="submit" className="btn btn-success">Connection</button>
                    </form>
                </div>
                <div className="col-6 pt-1">
                    <h6 className="text-uppercase pt-3" style = {{color:"#1835C3"}}> Pas encore Inscris ?</h6>
                </div>
            </div>
        </div>
        
     );
}
 
export default Connexion;
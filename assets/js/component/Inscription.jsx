import React, {useState} from 'react';
import AxiosCenter from '../services/AxiosCenter';
import danger from '../images/danger.svg'
const Inscription = (props) => {

const [identifiants, setIdentifiants] = useState({
    prenom : "",
    nom : "",
    email : "",
    password : "",
    dateDeNaissance : "",
    numeroRue : "",
    nomRue : "",
    ville : "",
    codePostal : ""
})
const [errorServ, setErrorServ] = useState([]);

    const handleChange = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value
      
        setIdentifiants({...identifiants,
            [name] : value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
                 await AxiosCenter.inscriptionClient(identifiants);
             
        }catch (error) { 
            setErrorServ(error.response.data.violations)
            console.log(error.response)
        }  
    }
  
    console.log(errorServ);
    return (  
        <>
        {errorServ.map((data, index) => 
            <div key={index} className="alert alert-danger mb-0" role="alert">
                <img src={danger}alt="iconedanger" className="img-fluid pr-2" width="30" height="30"/>
                <span className="align-middle"> {data.message} </span>
        </div>)}

            <form className = "container m-5 p-5" onSubmit={handleSubmit}>
            <h2 className="text-uppercase mb-5" style = {{color : "black"}}> Inscription</h2>
            <h5 className="mb-5 text-uppercase" style = {{color : "#414F8E"}}> Informations et adresse du contact</h5>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className="form-label">Prénom</label>
                        <input type="text"  className="form-control" onChange={handleChange} value={identifiants.prenom} name="prenom" placeholder="Veuillez entrer votre prénom" />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Nom</label>
                        <input type="text" className="form-control" value={identifiants.nom} onChange={handleChange} name="nom" placeholder="Veuillez entrer votre nom" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">   
                            <label className="form-label">Email</label>
                            <input type="email" value = {identifiants.email} onChange={handleChange} className="form-control" name="email" placeholder="Veuillez entrer votre email" />
                    </div>
                    <div className="col-6"> 
                        <label className="form-label">Password</label>
                        <input type="password" value= {identifiants.password} onChange={handleChange} className="form-control" name="password" placeholder="Veuillez entrer votre password"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Date de Naissance</label>
                    <input type="text" className="form-control" onChange={handleChange} value = {identifiants.dateDeNaissance} placeholder="Veuillez entrer votre date de naissance au format YYYY-MM-DD" name="dateDeNaissance"/>  
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <label className="form-label">Numero Rue</label>
                        <input type="text" value={identifiants.numeroRue} onChange={handleChange} className="form-control" name="numeroRue" placeholder="Veuillez entrer le numéro de votre rue" />  
                    </div>
                    <div className="col-9">
                        <label className="form-label">Rue</label>
                        <input type="text" value = {identifiants.nomRue} onChange={handleChange} className="form-control" name="nomRue" placeholder="Veuillez entrer le nom de votre rue" />  
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <label className="form-label">Code Postal</label>
                        <input type="text" value = {identifiants.codePostal} onChange={handleChange} className="form-control" name="codePostal" placeholder="Veuillez entrer votre code Postal" />  
                    </div>
                    <div className="col-9">
                        <label className="form-label">Ville</label>
                        <input type="text" value = {identifiants.ville} onChange={handleChange} className="form-control" name="ville" placeholder="Veuillez entrer le nom de votre ville" />  
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Inscription</button>
        </form>

        </>
    );
}
 
export default Inscription;
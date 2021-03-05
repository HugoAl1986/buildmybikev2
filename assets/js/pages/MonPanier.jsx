
import React from "react";
import "../../styles/panierStyle.css";
import AxiosCenter from "../services/AxiosCenter";
import axios from "axios";
import {useState} from "react";
import dateformat from 'dateformat';
import Loader from 'react-loader-spinner';
import ModalSuccess from '../component/Modal/ModalSuccess';
import ModalError from '../component/Modal/ModalError';
import ModalErrorServeur from '../component/Modal/ModalErrorServeur';
import {API_URL} from '../services/config';

const MonPanier = ({panier,isAuthenticated,setPanier}) => {
    console.log(panier);
   // Calcul prix commande
   const somme =  panier.reduce(function (accumulateur, valeurCourante) {
                return accumulateur + valeurCourante.prix;
                }, 0);
    // Permet envoie de la Date            
    var now = new Date();
    // Permet message d'erreur si l'utilisateur passe commande sans être identifier
    const [ModalErrorAPP,setModalErrorAPP]=useState(false);
    // Permet message pr dire que la commande a été passée
    const [ModalSuccessAPP,setModalSuccessAPP]=useState(false);
    // Loader en attendant que les requêtes soient validées
    const [loader,setLoader]=useState(false);

    const [modalServError,setModalServError]=useState();
    
    const requetes = [];
    // Permet la suppression d'une commande du panier.
    const supprimerDataPanier = (index) =>{
        
            const copiePanier = panier.slice();
            copiePanier.splice(index,1);
            setPanier(copiePanier);
     
    }
    
    const PostCommande =  async () => { 
        setModalErrorAPP(true)   
        if(isAuthenticated == true){       
                      
                try{
                        setLoader(true) 
                        const getID = await AxiosCenter.getID();
                        const getDataClient = await AxiosCenter.getClient(getID)
                        const IRIClient = getDataClient.data["@id"];
                
                        try { 
                                const CommandeID = await AxiosCenter.getCommande(getID);
                                const getNumCommande = CommandeID.data["hydra:member"].length+1;
                                const DataCommande = {
                                    numCommande : getNumCommande,
                                    montant : somme,
                                    dateCommande : dateformat(now,"yyyy-mm-dd h:mm:ss"),
                                    client : IRIClient   
                                } 
                                try{
                                    await AxiosCenter.postCommandes(DataCommande)
                                        .then(response => {
                                                                const IRICommande = response.data["@id"];
                                                                panier.forEach((num) => {num["commande"] = IRICommande;});
                                                                panier.forEach(  async (element) =>
                                                                        {
                                                                          try{
                                                                                    await axios.post(`${API_URL}${element.kitURL}`,element)
                                                                                   .then(response => {if(response){requetes.push("1")}})
                                                                                   .catch(error =>{ setModalServError(error);setLoader(false)})
                                                                                   // Permet d'afficher le modal et le Loader qu'une fois toutes les reponses des requetes reçues.
                                                                                   if(panier.length == requetes.length && modalServError == undefined || null){
                                                                                    setModalSuccessAPP(true);
                                                                                    setLoader(false);
                                                                                    setTimeout(()=>{
                                                                                        setPanier([]);
                                                                                        requetes.splice(0,requetes.length)},1000)     
                                                                                }
                                                                                   
                                                                           }catch{error => {console.log(error)}}
                                                                                   
                                                                        })
                                                            })
                                    }catch(error){setModalServError(error);setLoader(false)}
                            }catch(error){setModalServError(error);setLoader(false)}
                }catch(error){setModalServError(error);setLoader(false)}
            }
    }
    return ( 
        <>
        
        <div className="container-fluid">
            <div className="row pt-5 pb-5 pl-4 text-uppercase">
                <h3> mon Panier </h3>
            </div> 
            <div className="row pl-4 pb-4">
                <table className="table table-bordered">
                    <thead>
                        <tr className="row">
                        <th className="col-1 text-center">#</th>
                        <th className="col-2 text-center">Photo Produit</th>
                        <th className="col-5 text-center">Description</th>
                        <th className="col-2 text-center">Montant</th>
                        <th className="col-2 text-center">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {panier.length == 0 ? 
                    <tr className=" row text-center font-italic">
                        <td className="col-12 d-flex align-items-center justify-content-center">Vous n'avez rien dans votre panier !!</td>
                    </tr> 
                    : panier.map((data,index) =>
                   
                        <tr key={index} className="row">
                                <td scope="row" className="col-1 d-flex align-items-center justify-content-center font-weight-bold">{index+1}</td>
                                <td className="col-2 d-flex align-items-center">
                                    <img src={data.type !== "Roues" ? data.couleurURL : data.modeleURL} id="imagepanier" className="img-fluid"/>
                                </td>
                                <td className="col-5 d-flex align-items-center justify-content-left">
                                    {data.type !== "Roues" ? 
                                        <p className="text-left">
                                            Vélo {data.type} à {data.freins} <br></br>
                                            couleur : {data.couleur}<br></br>
                                            Taille : {data.taille} <br></br>
                                            Finition : {data.finition}<br></br>
                                            blocage : {data.blocage}<br></br>
                                                
                                        </p> : 
                                        <p classeName= "text-left"> 
                                            Roues à {data.freins} <br></br>
                                            Hauteur : {data.modele} <br></br>
                                            Couleur : {data.couleur}
                                        </p>
                                    }
                                </td>
                                <td className="col-2 d-flex align-items-center justify-content-center text-center">
                                    {data.prix} &euro;</td>
                                <td className="col-2 d-flex align-items-center justify-content-center text-center">
                                    <button type="button" onClick = {()=>supprimerDataPanier(index)} id="supprimerpanier" className="hvr-grow"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>                           
                        )}
                            {panier.length !== 0 && 
                            <tr className="row justify-content-end">
                                <td className="col-2 d-flex align-items-center justify-content-end"> 
                                    Prix Total TTC : 
                                </td>
                                <td className="col-2 font-weight-bold d-flex align-items-center justify-content-center"> 
                                    {somme} &euro;
                                </td>
                            </tr> 
                            }                      
                     </tbody>                   
                </table>
            </div> 
            { panier.length !== 0 && 
                <div className="pl-4 pb-4 row">
                    <div className="col-12 d-flex justify-content-end pr-0">
                        <button type="button" 
                        className="btn btn-primary text-uppercase" 
                        id="passerCommande" 
                        onClick={PostCommande} 
                        >Commander
                         {loader && <Loader className="ml-2 d-inline-block" type="ThreeDots" color="white" height={20} width={20}/>}
                        </button>
                    </div>
                </div>
            } 
            
          <ModalSuccess message = "Bravo !!! Votre commande a bien été passée" ModalSuccessAPP={ModalSuccessAPP} setModalSuccessAPP={setModalSuccessAPP} /> 
          <ModalError message = "Vous devez vous identifier pour pouvoir passer une commande " isAuthenticated = {isAuthenticated} ModalErrorAPP={ModalErrorAPP} setModalErrorAPP={setModalErrorAPP} /> 
          <ModalErrorServeur isAuthenticated = {isAuthenticated} modalServError={modalServError} setModalServError={setModalServError} /> 
        </div> 
        </>
     );
}
 
export default MonPanier;
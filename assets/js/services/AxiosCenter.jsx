import axios from 'axios';
import JWTDecode from 'jwt-decode';
import {API_URL} from './config';
import React from 'react';
function getClients(){
    return(
        axios.get(API_URL+"clients")
             .then(response => {response.data["hydra:member"]; console.log(response.data["hydra:member"])}, 
                    )     
        )
}
function getCommandes(){
    return(
        axios.get(API_URL+"commandes")
             .then(response => {response.data["hydra:member"]; console.log(response.data["hydra:member"])}, 
                    )     
        )
}

// Permet l'authentification sur la page connexion, et de stoker le token dans un sessionStorage

function Authentification(identifiants){
    return(
          axios.post(API_URL+"login_check", identifiants)
          .then(response => {
              const token = response.data.token;
              // stockage du token
              window.sessionStorage.setItem("authToken", token);
              // On ajoute dans nos requêtes un header par défaut
              SetHeaderToken(token);
           }
))}

// Permet la deconnection de l'utilisateur via le bouton de la Navbar

function Deconnection(){
    window.sessionStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];

}
// Permet l'ajout du token dans le header dans chacune des requêtes axios
function SetHeaderToken(token){
    axios.defaults.headers["Authorization"] = "Bearer " + token;

}

// Fonction pour récupérer le token au démarrage de la page
function setup(){
    // 1. Voir si on a un token
    const token = window.sessionStorage.getItem("authToken");
    // 2. Si le token est encore valide
    if(token){
        const JWTData = JWTDecode(token);
        if(JWTData.exp*1000 > new Date().getTime()){
            SetHeaderToken(token)
        }else{
            window.sessionStorage.removeItem("authToken");
        }
    }
}

// Récupérer le prénom et l'afficher dans la Navbar
function getPrenom() {
    const token = window.sessionStorage.getItem("authToken");
    if(token) {
        const JWTData = JWTDecode(token);
        return <span className="span-prenom">Hey {JWTData.prenom}</span>
    } else return <span className="span-prenom"> Me connecter </span>
}


// Permet de savoir si on est identifié

function isAuthenticated(){
     // 1. Voir si on a un token
     const token = window.sessionStorage.getItem("authToken");
     // 2. Si le token est encore valide
     if(token){
         const JWTData = JWTDecode(token);
         if(JWTData.exp*1000 > new Date().getTime()){
             return true;
        }
        else return false;
     }
     return false;
}

function inscriptionClient(identifiants){
   return( axios.post(API_URL+"clients",identifiants)
   )
}
function getID(){
    const token = window.sessionStorage.getItem("authToken")
    const JWT = JWTDecode(token);
    return JWT.id
}
function getClient(id){
    const token = window.sessionStorage.getItem("authToken");
    SetHeaderToken(token)
    return axios.get(API_URL+"clients/"+id)
}
function putClient(id,identifiants){
    const token = window.sessionStorage.getItem("authToken");
    SetHeaderToken(token);
    return axios.put(API_URL+"clients/"+id,identifiants)
            
}
function getCommande(id){
    const token = window.sessionStorage.getItem("authToken");
    SetHeaderToken(token);
    return axios.get(`${API_URL}clients/${id}/commandes`)
}
function postCommandes(DataCommande){
    return axios.post(API_URL+"commandes",DataCommande)
}

    

export default {
    getClients,
    getCommandes, 
    Authentification,
    Deconnection, 
    setup,
    getPrenom, 
    isAuthenticated,
    inscriptionClient,
    getID,
    getClient,
    putClient,
    getCommande,
    SetHeaderToken,
    postCommandes
};
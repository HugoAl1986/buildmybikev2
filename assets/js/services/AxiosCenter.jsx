import axios from 'axios';
import JWTDecode from 'jwt-decode';
function getClients(){
    return(
        axios.get("http://localhost:8000/api/clients")
             .then(response => {response.data["hydra:member"]; console.log(response.data["hydra:member"])}, 
                    )     
        )
}
function getCommandes(){
    return(
        axios.get("http://localhost:8000/api/commandes")
             .then(response => {response.data["hydra:member"]; console.log(response.data["hydra:member"])}, 
                    )     
        )
}

// Permet l'authentification sur la page connexion, et de stoker le token dans un sessionStorage

function Authentification(identifiants){
    return(
 axios.post("http://localhost:8000/api/login_check", identifiants)
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
        }
    }
}

// Récupérer le prénom et l'afficher dans la Navbar
function getPrenom() {
    const token = window.sessionStorage.getItem("authToken");
    const monCompte = "Me Connecter";
    if(token) {
        const JWTData = JWTDecode(token);
        return (`Hey ${JWTData.prenom}`)
    } else return monCompte;
    
    return monCompte;
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
    

export default {
    getClients,
    getCommandes, 
    Authentification,
    Deconnection, 
    setup,
    getPrenom, 
    isAuthenticated
};
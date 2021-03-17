// les imports
import '../styles/app.css';
import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import Navbar from '../js/component/navbar';
import Accueil from './pages/accueil';
import Footer from '../js/component/footer';
import Connexion from './pages/Connexion';
import '../styles/hover.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import RouteBike from './pages/RouteBike';
import RouteEnduroBike from './pages/RouteEnduroBike';
import AxiosCenter from './services/AxiosCenter';
import InscriptionBis from './pages/inscriptionbis';
import MesInfos from './pages/MesInfos';
import MonPanier from './pages/MonPanier';
import VttRigide from './pages/VttRigide';
import VttSusp from './pages/VttSusp';
import Triathlon from './pages/Triathlon';
import Cyclocross from './pages/Cyclocross';
import Roues from './pages/Roues';
import ModalAvertissement from'./component/Modal/ModalAvertissement';



AxiosCenter.setup();

const App = (props) => {
// Récupération du panier via le localStorage
//  const createPanier = localStorage.getItem("panier");
// Creation du state du panier
const [panierBox,setPanierBox] = useState([]);
//
const [isAuthenticated, setIsAuthenticated] = useState(AxiosCenter.isAuthenticated());
const NavbarWithRouter = withRouter(Navbar);
const [modalAvertissementAPP,setModalAvertissementAPP] = useState(true)


    return <HashRouter>  
            
           <div className="container-fluid pl-0 pr-0 m-0">
           <ModalAvertissement 
                modalAvertissementAPP={modalAvertissementAPP}
                setModalAvertissementAPP={setModalAvertissementAPP}
            />
                <NavbarWithRouter panierBox={panierBox} isAuthenticated = {isAuthenticated} onLogout={setIsAuthenticated} />                
                <Switch> 
                    <Route path="/routebike" render= {props => <RouteBike prevPanier={panierBox} panier={setPanierBox} {...props} />} />
                    <Route path="/roues" render= {props => <Roues prevPanier={panierBox} panier={setPanierBox} {...props} />} />
                    <Route path="/cyclocross" render= {props => <Cyclocross prevPanier={panierBox} panier={setPanierBox} {...props} />} />
                    <Route path="/triathlon" render= {props => <Triathlon prevPanier={panierBox} panier={setPanierBox} {...props} />} />
                    <Route path="/vttrigide" render= {props => <VttRigide prevPanier={panierBox} panier={setPanierBox} {...props} />} />
                    <Route path="/vttsusp" render= {props => <VttSusp prevPanier={panierBox} panier={setPanierBox} {...props} />} />
                    <Route path="/routeendurobike" render= {props => <RouteEnduroBike prevPanier={panierBox} panier={setPanierBox} {...props} />} />
                    <Route path ="/inscriptionbis" component={InscriptionBis} />   
                    <Route path="/connexion" 
                           render={props => <Connexion onLogin={setIsAuthenticated} {...props}/>} /> 
                    <Route path="/mesinfos" render = {props => <MesInfos {...props} isAuthenticated={isAuthenticated} onLogout={setIsAuthenticated} props={props} />}/>
                    <Route path="/monpanier" render = {props => <MonPanier setPanier = {setPanierBox} isAuthenticated = {isAuthenticated} panier={panierBox} {...props} />}/>
                    <Route path="/" component={Accueil}/>

                </Switch>
                <Footer/>   
            </div>  
                          
           </HashRouter>
};
const rootElement = document.querySelector('#app');
ReactDom.render(<App />, rootElement);

// les imports
import '../styles/app.css';
import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Navbar from '../js/component/navbar';
import Accueil from './pages/accueil';
import Footer from '../js/component/footer';
import Connexion from './pages/Connexion';
import '../styles/hover.css';
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import RouteAero from './pages/RouteAero';
import AxiosCenter from './services/AxiosCenter';

AxiosCenter.setup();

const App = () => {

const [isAuthenticated, setIsAuthenticated] = useState(AxiosCenter.isAuthenticated());
const NavbarWithRouter = withRouter(Navbar);

    return <HashRouter>  
                <NavbarWithRouter isAuthenticated = {isAuthenticated} onLogout={setIsAuthenticated} />  
                <div className="container-fluid p-0"> 
                <Switch> 
                    <Route path="/routeaero" component={RouteAero}/>
                    <Route path="/connexion" 
                           render={props => <Connexion onLogin={setIsAuthenticated} {...props}/>} />   
                    <Route path="/" component={Accueil}/>                       
                </Switch>
                </div>  
                <Footer/>                  
           </HashRouter>
};
const rootElement = document.querySelector('#app');
ReactDom.render(<App />, rootElement);

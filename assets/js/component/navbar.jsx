
import React, {useEffect, useState} from 'react';
import logo from '../images/logo.png';
import iconuser  from '../images/iconuser.svg';
import cycliste from '../images/cycliste.svg';
import panier from '../images/panier.svg';
import AxiosCenter from '../services/AxiosCenter';
import {NavLink, Link} from 'react-router-dom';
import "../../styles/navbarstyle.css";
import {Transition, config, Spring} from 'react-spring/renderprops';

const Navbar = ({isAuthenticated, onLogout, history, panierBox}) => { 

    const HandleDeconnection = () => {
        AxiosCenter.Deconnection();
        onLogout(false);
        history.push("/connexion");    
    }
    const [countPanier,setCountPanier] = useState("");
    const [showMenuResponsive,setShowMenuResponsive] = useState(false);
    const [showMenuDeroulant,setShowMenuDeroulant] = useState(false)

    useEffect(()=>{    
        if(panierBox == undefined || null) {
            setCountPanier("0")
        }else{
        setCountPanier(panierBox.length)}},[]);

    const hamburgerClick = () =>{
        if(showMenuResponsive == false){ setShowMenuResponsive(true); setShowMenuDeroulant(false)}
        else{setShowMenuResponsive(false)};
    } 
    const menuDeroulantClick = () =>{
        if(showMenuDeroulant == false){ setShowMenuDeroulant(true);setShowMenuResponsive(false)}
        else{setShowMenuDeroulant(false)};

    }
        
    return ( 
<>          
        <div className="row sticky-top">
           <nav className="menu-gauche pt-1 pb-1 col-8">
                    <div className="div-logo col-xs-5 col-1">
                            {showMenuResponsive ? 
                            
                                <Spring 
                                    from ={{transform : "rotate(0deg)"}}
                                    to={{transform : "rotate(90deg)"}}
                                    >
                                    {props => (
                                        <button type="button" style={props} onClick={hamburgerClick} className="hamburger">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    )}
                                </Spring> : 
                                
                                 <Spring 
                                 from ={{transform : "rotate(90deg)"}}
                                 to={{transform : "rotate(0deg)"}}
                                 >
                                 {props => (
                                     <button type="button" style={props} onClick={hamburgerClick} className="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                 )}
                                </Spring>
                            }
                        
                        
                        <NavLink to="/" className="link-logo" className="d-flex">
                            <img className="logo-build" src={logo} alt="logo"></img>
                        </NavLink>
                    </div>
                    <ul className="menu-liste col-7">
                        <Link to="/routebike"> <li className="menu-item">Route</li> </Link>
                        <Link to="/cyclocross"> <li className="menu-item">Cyclocross</li> </Link>
                        <Link to="/vttrigide"> <li className="menu-item">VTT</li> </Link>
                        <Link to="/triathlon"> <li className="menu-item">Triathlon</li> </Link>
                        <Link to="/roues"> <li className="menu-item">Roues</li> </Link>
                    </ul>
                
            </nav>
            <nav className="menu-droite sticky-top pt-1 pb-1 col-4">              
                <ul className="menu-liste-droite">
                    <li className="menu-item-droite">
                    {isAuthenticated ? 
                    <>
                        <button id="buttonnavcycliste" onClick={menuDeroulantClick} >
                            <img className="hvr-grow" src={isAuthenticated ? cycliste : iconuser} alt="iconuser" width="40" height="32" /> {AxiosCenter.getPrenom()} 
                        </button> 
                        <Transition 
                            items={showMenuDeroulant}
                            from={{opacity: 0}}
                            enter={{opacity: 1}}
                            leave={{ opacity: 0}}
                            config={config.slow}
                            >
                            {showMenuDeroulant => showMenuDeroulant ? props =>
                                <div className="menu-deroulant-authentifie" style={props}>   
                                    <NavLink to="/mesinfos" className = "menu-deroulant-item-authentifie">Mes infos</NavLink> 
                                    <button className="bouton-deconnexion-authentifie"  onClick={HandleDeconnection}> Deconnexion</button> 
                                </div> 
                            : null }
                        </Transition>
                    </> : 
                     <NavLink to="/connexion" className="font-weight-bold w-100 d-flex align-items-center"><img className="h-100" src={iconuser} alt="iconuser" width="40" height="40" /> {AxiosCenter.getPrenom()} </NavLink>   
                           }
                                
                           
                    </li>
                    <li className="menu-item-droite" >
                        <NavLink to="/monpanier"><img src={panier} alt="panier" width="40" height="40"/> 
                        {countPanier<1 ? null  : <p id="notifpanier"> <span>{countPanier}</span> </p>}
                        </NavLink>
                    </li> 
                </ul>
            </nav>
            <Transition 
                items={showMenuResponsive}
                from={{transform: 'translate3d(-110px,48px,0)'}}
                enter={{transform: 'translate3d(0px,48px,0)'}}
                leave={{ transform: 'translate3d(-110px,48px,0)'}}
                config={config.default}
                >
                    
            {showMenuResponsive => showMenuResponsive ? props =>
                <div className="row menu-responsive"  >
                    <ul className="menu-liste-responsive" style={props} >
                        <li className="menu-item-responsive"><Link to="/">Accueil</Link></li> 
                        <li className="menu-item-responsive"><Link to="/routebike">Route</Link></li> 
                        <li className="menu-item-responsive"><Link to="/cyclocross">Cyclocross </Link></li>
                        <li className="menu-item-responsive"><Link to="/vttrigide"> VTT</Link></li> 
                        <li className="menu-item-responsive"><Link to="/triathlon"> Triathlon</Link></li> 
                        <li className="menu-item-responsive"><Link to="/roues"> Roues</Link></li> 
                    </ul>
                </div>
            : null
        }
        </Transition>   
        </div>
        
             
  </>      
     );
}
 
export default Navbar;

import React, {useEffect, useState} from 'react';
import logo from '../images/logo.png';
import iconuser  from '../images/iconuser.svg';
import panier from '../images/panier.svg';
import logout from'../images/logout.svg';
import AxiosCenter from '../services/AxiosCenter';
import {NavLink} from 'react-router-dom';
var Style = {
    color : "#414F8E",
    backgroundColor : "#ECEDF0"
}


const Navbar = ({isAuthenticated, onLogout, history}) => { 

    const HandleDeconnection = () => {
        AxiosCenter.Deconnection();
        onLogout(false);
        history.push("/connexion");    
    }

    return ( 
<>  
         
            <nav  style = {Style}  className="navbar navbar-expand-lg navbar-light border-2 border-dark" id="nav">
                <NavLink to="/" className="navbar-brand">
                        <img src={logo} className="rounded float-start hvr-grow" width="70" heigth="70" alt="logo"></img>
                </NavLink>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav col-xl-9 col-lg-8 mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a style = {Style}  className="nav-link dropdown-toggle hvr-grow text-uppercase" href="#" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Route </a>
                                <div className="dropdown-menu border-0" aria-labelledby="navbarDropdownMenuLink1">
                                                <NavLink to="/routeaero" className="dropdown-item text-center"> Aero</NavLink>
                                                <a className="dropdown-item text-center" href="#">Endurace</a>
                                </div>
                    </li> 
                    <li className="nav-item dropdown">
                        <a style = {Style} className="nav-link dropdown-toggle hvr-grow text-uppercase" href="#" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vtt </a>
                                <div className="dropdown-menu border-0" aria-labelledby="navbarDropdownMenuLink2">
                                                <a className="dropdown-item text-center" href="#">XC-Rock</a>
                                                <a className="dropdown-item text-center" href="#">Xc-Lite</a>
                                </div>
                    </li>
                    <li className ="nav-item">
                        <a style = {Style} className ="nav-link  text-uppercase hvr-grow" href="#">triathlon</a>
                    </li>
                    <li className ="nav-item">
                        <a style = {Style}  className ="nav-link text-uppercase hvr-grow" href="#">Cyclocross</a>
                    </li>
                    <li className ="nav-item">
                        <a style = {Style}  className ="nav-link text-uppercase hvr-grow" href="#">Piste</a>
                    </li>
                    <li className ="nav-item">
                        <a style = {Style}  className ="nav-link text-uppercase hvr-grow" href="#">Roues</a>
                    </li>
                    </ul>
                    <div className="col-xl-3 col-lg-4 pl-0 pr-0">
                            <ul className="navbar-nav justify-content-end">
                                   
                                <li className="navbar-item pl-3 pr-3" >
                                   <NavLink to="/connexion" className="hvr-grow"><img className="h-100 d-inline-block img-fluid " src={iconuser} alt="iconuser" width="40" height="40"/> {AxiosCenter.getPrenom()} </NavLink> 
                                    
                                </li>   
                                <li className="navbar-item" >
                                    <a href="#"><img className="h-100 d-inline-block img-fluid hvr-grow" src={panier} alt="panier" width="40" height="40"/></a>
                                </li> 
                                {!isAuthenticated ? <li></li> :
                                    <li className="navbar-item">
                                        <button id="buttondeconnection" onClick={HandleDeconnection}> <img src={logout} className="h-100 d-inline-block img-fluid hvr-grow text-uppercase pl-3" alt="logout" width="40" height="40"/> </button>
                                    </li> 
                                } 
                               
                            </ul>
                    </div>          
                </div>
        </nav>
        
      
  </>      
     );
}
 
export default Navbar;
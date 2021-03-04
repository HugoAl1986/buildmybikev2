import logo from '../images/logo.png';
import iconuser  from '../images/iconuser.svg';
import panier from '../images/panier.svg';
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
  
    const getPanier = localStorage.getItem("panier");
    const panierToObjet= JSON.parse(getPanier)
    const countPanier = panierToObjet.length-1
    console.log(panierToObjet);

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
                        <a style = {Style}  className="nav-link text-uppercase" href="#" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Route </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                                <NavLink to="/routeaero" className="dropdown-item"> Aero</NavLink>
                                                <a className="dropdown-item" href="#">Endurace</a>
                                </div>
                    </li> 
                    <li className="nav-item dropdown">
                        <a style = {Style} className="nav-link text-uppercase" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vtt </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                                <a className="dropdown-item" href="#">XC-Rock</a>
                                                <a className="dropdown-item" href="#">Xc-Lite</a>
                                </div>
                    </li>
                    <li className ="nav-item">
                        <a style = {Style} className ="nav-link text-uppercase" href="#">triathlon</a>
                    </li>
                    <li className ="nav-item">
                        <a style = {Style}  className ="nav-link text-uppercase" href="#">Cyclocross</a>
                    </li>
                    <li className ="nav-item">
                        <a style = {Style}  className ="nav-link text-uppercase" href="#">Piste</a>
                    </li>
                    <li className ="nav-item">
                        <a style = {Style}  className ="nav-link text-uppercase" href="#">Roues</a>
                    </li>
                    </ul>
                    <div className="col-xl-3 col-lg-4 pl-0 pr-0">
                            <ul className="navbar-nav justify-content-end">
                                   
                                <li className="nav-item dropdown pl-3 pr-3" >
                                    {isAuthenticated ? 
                                    <>
                                        <NavLink to="/connexion" className="nav-link" style = {Style} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="h-100 d-inline-block img-fluid " src={iconuser} alt="iconuser" width="40" height="40" /> {AxiosCenter.getPrenom()} </NavLink> 
                                        <div className="dropdown-menu">   
                                            <NavLink to="/mesinfos" className="dropdown-item" >Mes infos personnelles</NavLink>  
                                            <button className="dropdown-item"  onClick={HandleDeconnection}> Deconnection</button>
                                        </div> 
                                    </> : 
                                     <NavLink to="/connexion" className="nav-link" style = {Style}><img className="h-100 d-inline-block img-fluid " src={iconuser} alt="iconuser" width="40" height="40" /> {AxiosCenter.getPrenom()} </NavLink>   
                                           }
                                  
                                </li> 
                                <li className="navbar-item" >
                                        <a href="#"><img className="h-100 d-inline-block img-fluid hvr-grow" src={panier} alt="panier" width="40" height="40"/> <span id="notifpanier"> <span>{countPanier}</span>  </span></a>
                                </li> 
                            </ul>
                    </div>          
                </div>
        </nav>
        
      
  </>      
     );
}
 
export default Navbar;
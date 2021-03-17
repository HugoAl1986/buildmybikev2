<nav  style = {Style}  className="navbar navbar-expand-lg navbar-light border-2 border-dark pr-0" id="nav">
<NavLink to="/" className="navbar-brand">
        <img src={logo} className="rounded float-start hvr-grow" width="70" heigth="70" alt="logo"></img>
</NavLink>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav col-xl-9 col-lg-8 mt-2 mt-lg-0 font-weight-bold">
    <li className ="nav-item">
        <NavLink to="/routebike" style = {Style} className ="nav-link text-uppercase">Route</NavLink>
    </li>
    <li className ="nav-item">
        <NavLink to ="/vttrigide" style = {Style} className ="nav-link text-uppercase">VTT</NavLink>
    </li>
    <li className ="nav-item">
        <NavLink to ="/triathlon" style = {Style} className ="nav-link text-uppercase">triathlon</NavLink>
    </li>
    <li className ="nav-item">
        <NavLink to ="/cyclocross" style = {Style}  className ="nav-link text-uppercase" >Cyclocross</NavLink>
    </li>
    <li className ="nav-item">
        <NavLink to="/roues" style = {Style}  className ="nav-link text-uppercase" >Roues</NavLink>
    </li>
    </ul>
    <div className="col-xl-3 col-lg-4 pl-0 pr-0">
            <ul className="navbar-nav justify-content-end">
                   
                <li className="nav-item dropdown pl-3 pr-3 " >
                    {isAuthenticated ? 
                    <>
                        <button className="nav-link" id="buttonnavcycliste" style = {Style} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="h-100 d-inline-block img-fluid hvr-grow" src={isAuthenticated ? cycliste : iconuser} alt="iconuser" width="40" height="40" /> {AxiosCenter.getPrenom()} 
                        </button> 
                        <div className="dropdown-menu">   
                            <NavLink to="/mesinfos" className="dropdown-item" >Mes infos personnelles</NavLink>  
                            <button className="dropdown-item"  onClick={HandleDeconnection}> Deconnexion</button>
                        </div> 
                    </> : 
                     <NavLink to="/connexion" className="nav-link font-weight-bold" style = {Style}><img className="h-100 d-inline-block img-fluid " src={iconuser} alt="iconuser" width="40" height="40" /> {AxiosCenter.getPrenom()} </NavLink>   
                           }
                  
                </li> 
                <li className="navbar-item" >
                        <Link to="/monpanier"><img className="h-100 d-inline-block img-fluid hvr-grow mr-4" id="panier-style" src={panier} alt="panier" width="40" height="40"/> 
                        {countPanier<1 ? null  : <p id="notifpanier"> <span>{countPanier}</span> </p>}</Link>
                </li> 
            </ul>
    </div>          
</div>
</nav>
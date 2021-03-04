import React from 'react';
import buildbgaero from '../images/buildbgaero.jpg';
import Carrousel from '../services/carrousel.jsx';
import routeaccueil from '../images/routeaccueil.jpg';
import vttaccueil from '../images/vttaccueil.jpg';
import triathlonaccueil from '../images/triathlonaccueil.jpg';
import cyclocrossaccueil from '../images/cyclocrossaccueil.jpg';

var Style= { color : "#414F8E",
            backgroundColor : "#ECEDF0" }

const Accueil = () => {
    
    return ( 
        <>
                <div className="row"> 
                    <div className="col-12 p-0">
                        <img className="card-img text-light" src={buildbgaero} alt="Card image"/>
                        <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <h4 style = {Style} className="border border-darkrounded text-uppercase p-2 text-center" 
                            >Votre cadre au meilleur prix, la personnalisation est offerte</h4>
                        </div>
                    </div>
                </div>
               <div className="row">
                   <div className="col-8">
                       <img src={routeaccueil} alt="routeaccueil" className="img-fluid p-4 zoom"/>
                   </div>
                   <div className="col-4">
                            <a href="#" className="hvr-grow text-decoration-none"><h4 className="pt-4 pb-1 m-0"> Route </h4> </a>
                            <hr className="hrstyle"></hr>
                            <p className="m-0 pt-1"> Profitez de nos 2 modèles de cadre de route accés confort ou compétition qui s'adapteront à votre pratique.</p>
                   </div>
               </div>
               <div className="row">
                   <div className="col-3"><a href="#" className="hvr-grow text-decoration-none"><h4 className="pl-4 pt-4 pb-1 m-0"> VTT </h4> </a>
                        <hr className="hrstyle ml-4"></hr>
                        <p className="m-0 pt-1 pl-4"> Deux modèles de VTT avec ou sans suspension pour parcourir les terrains les plus escarpés.</p>   
                   </div>
                   <div className="col-9">   
                            <img src={vttaccueil} alt="vttaccueil" className="img-fluid p-4 zoom"/>
                   </div>
                </div>
                <div className="row">
                   <div className="col-7">
                       <img src={triathlonaccueil} alt="triathlonaccueil" className="img-fluid p-4 zoom"/>
                   </div>
                   <div className="col-5">
                            <a href="#" className="hvr-grow text-decoration-none"><h4 className="pt-4 pb-1 m-0"> Triathlon</h4> </a>
                            <hr className="hrstyle"></hr>
                            <p className="m-0 pt-1"> Nos cadres de triathlon offrent une pénétration parfaite dans le vent pour battre tous vos chronos.</p>
                   </div>
               </div>
               <div className="row">
                  
                   <div className="col-4">
                            <a href="#" className="hvr-grow text-decoration-none"><h4 className=" pl-4 pt-4 pb-1 m-0"> Cyclocross </h4> </a>
                            <hr className="hrstyle ml-4"></hr>
                            <p className="m-0 pl-4"> Courrez, Ridez faites comme votre champion Mathieu Van Der Poel sur les terrains les plus difficiles.</p>
                   </div>
                   <div className="col-8">
                       <img src={cyclocrossaccueil} alt="cyclocrossaccueil" className="img-fluid p-4 zoom"/>
                   </div>
               </div>         
        </>     
      );
}
export default Accueil;
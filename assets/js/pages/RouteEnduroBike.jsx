import '../../styles/routeStyle.css';
import React,{useState} from 'react';
import FormFormik from "../component/FormFormik";
import BandeauMenu from "../component/BandeauMenu";
import blancenduro from "../images/endurobike/blancenduro.jpg";
import grisenduro from "../images/endurobike/grisenduro.jpg";
import jauneenduro from "../images/endurobike/jauneenduro.jpg";

const RouteEnduroBike = ({panier,prevPanier}) => {
    const[changeColorBike, setChangeColorBike] = useState("blanc");
    const[prix,setPrix] = useState(1299);
    const [dataBike,setDataBike]=useState({
        modele : "Enduro",
        type : "Enduro",
        cadre : "Endura ICR",
        url : "kit_routes"
    });
    const [dataCouleur,setDataCouleur]=useState([
        {id : 1, couleur : "blanc"},
        {id : 2, couleur : "gris"},
        {id : 3, couleur : "jaune"}
    ])
    
    const changeImage = (event) => {
     if(event.currentTarget.name == "blanc"){
         setChangeColorBike("blanc")
     }else if(event.currentTarget.name == "gris"){
        setChangeColorBike("gris")
     }else{
        setChangeColorBike("jaune")
     }
    } 
    return ( 
        <>
             <BandeauMenu idBandeau = "Aero" velo1= "aero" velo2="enduro" Titre="Route" url1="/routebike" url2="/routeendurobike" />
             <div className="row container-global-route" >
               
                <div className="col-md-12 col-lg-6 text-center container-image">
                        <img src={changeColorBike == "blanc" ? blancenduro
                        : changeColorBike == "gris" ? grisenduro 
                        : jauneenduro
                        
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-md-12 col-lg-6 container-description">
                        <h6 className="row text-uppercase"> Enduro </h6>
                        <p className="row pt-4 presentation"> Ce cadre Enduro est parfait pour cyclotouristes ou cyclistes qui souhaitent profiter d'un vélo tout confort.</p>
                        <div className="row pt-4">
                            <h4 className=""> Vélo complet à partir de  <span className="prix"> {prix} &euro; </span> TTC </h4>
                        </div>
                        <div className="row">
                            <hr className="col-md-3" /> 
                            <h5 className="col-md-4 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="col-md-3"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="blanc" onMouseOver={changeImage}  className="carreblanc d-inline-block"></button>
                           <button type="button" name="jaune" onMouseOver={changeImage} className="carrejaune d-inline-block"></button>
                           <button type="button" name="gris" onMouseOver={changeImage} className="carregris d-inline-block"></button>
                        </div>
                    </div>
            </div>
                <div className="row container-configurateur"> 
                           <div className="col-md-5"><hr className="hrConfigurateur" /></div>
                           <div className="col-md-2 border border-dark"> CONFIGURATEUR </div>
                           <div className="col-md-5"> <hr className="hrConfigurateur"/></div>
                </div> 

                {/* Formulaire Formik */}

                <div className="row"> 
                    <> 
                    <FormFormik 
                        panier={panier} 
                        prevPanier={prevPanier}
                        prix={prix}
                        setPrix={setPrix}
                        bikeBlanc={blancenduro}
                        bikeJaune={jauneenduro}
                        bikeGris={grisenduro}
                        dataCouleur = {dataCouleur}
                        dataBike={dataBike}
                        />        
            
                    </>
                </div>
        </>
     );
}

 
export default RouteEnduroBike;
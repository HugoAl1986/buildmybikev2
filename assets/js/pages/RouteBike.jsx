import '../../styles/routeStyle.css';
import React,{useState} from 'react';
import sharpbleu from "../images/aerobike/sharpbleu.jpg"
import sharporange from "../images/aerobike/sharporange.jpg"
import sharprouge from "../images/aerobike/sharprouge.jpg"
import sharpjaune from "../images/aerobike/sharpjaune.jpg"
import FormFormik from "../component/FormFormik";
import BandeauMenu from "../component/BandeauMenu";

const RouteBike = ({panier,prevPanier}) => {
    const[changeColorBike, setChangeColorBike] = useState("bleu");
    const[prix,setPrix] = useState(1699);

    const[dataBike,setDataBike]=useState({
        type : "Aero",
        cadre : "Heroa",
        modele : "Sharp",
        url : "kit_routes"
    })

    const [dataCouleur,setDataCouleur]=useState([
        {id : 1, couleur : "bleu"},
        {id : 2, couleur : "rouge"},
        {id : 3, couleur : "jaune"},
        {id : 4, couleur : "orange"}
    ])
    
    const changeImage = (event) => {
     if(event.currentTarget.name == "bleu"){
         setChangeColorBike("bleu")
     }else if(event.currentTarget.name == "jaune"){
        setChangeColorBike("jaune")
     }else if(event.currentTarget.name == "orange"){
        setChangeColorBike("orange")
     }else{
        setChangeColorBike("rouge")
     }
    } 
    return ( 
        <>
            <BandeauMenu idBandeau = "Aero" velo1= "aero" velo2="enduro" Titre="Route" url1="/routebike" url2="/routeendurobike" />
            <div className="row container-global-route" >             
                    <div className="col-md-12 col-lg-6 text-center container-image">
                        <img src={changeColorBike == "bleu" ? sharpbleu 
                        : changeColorBike == "rouge" ? sharprouge 
                        : changeColorBike == "orange" ? sharporange
                        : sharpjaune
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-md-12 col-lg-6 container-description">
                        <h6 className="row text-uppercase"> Aero </h6>
                        <p className="row pt-4 presentation"> Ce cadre aéro est léger, rigide, et dynamique parfait pour les coursiers ou cyclosportifs.</p>
                        <div className="row">
                            <h4> Vélo complet à partir de  <span className="prix"> 1699.00 &euro; </span> TTC </h4>
                        </div>
                        <div className="row">
                            <hr className="col-md-3" /> 
                            <h5 className="col-md-4 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="col-md-3"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="bleu" onMouseOver={changeImage}  className="carrebleu d-inline-block"></button>
                           <button type="button" name="jaune" onMouseOver={changeImage} className="carrejaune d-inline-block"></button>
                           <button type="button" name="orange" onMouseOver={changeImage} className="carreorange d-inline-block"></button>
                           <button type="button" name="rouge" onMouseOver={changeImage} className="carrerouge d-inline-block"></button>
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
                        bikeBleu={sharpbleu}
                        bikeOrange={sharporange}
                        bikeJaune={sharpjaune}
                        bikeRouge={sharprouge}
                        dataCouleur={dataCouleur}
                        dataBike ={dataBike}
                        />        
            
                    </>
                </div>
        </>
     );
}

 
export default RouteBike;
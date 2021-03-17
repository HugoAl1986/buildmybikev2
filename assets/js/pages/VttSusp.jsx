import React,{useState} from 'react';
import suspbleunoir from "../images/VTTsusp/suspbleunoir.jpg"
import suspjaune from "../images/VTTsusp/suspjaune.jpg"
import susprouge from "../images/VTTsusp/susprouge.jpg"
import suspnoir from "../images/VTTsusp/suspnoir.jpg"
import FormFormik from "../component/FormFormik";
import BandeauMenu from "../component/BandeauMenu";
import '../../styles/routeStyle.css';

const VttSusp = ({panier,prevPanier}) => {
    const[changeColorBike, setChangeColorBike] = useState("noir");
    const[prix,setPrix] = useState(1499);
    const[submitForm]=useState(false);

    const[dataBike]=useState({
        type : "Vtt",
        cadre : "XSusp",
        modele : "X-Susp",
        url : "kit_vtts"
    })

    const [dataCouleur]=useState([
        {id : 1, couleur : "noir"},
        {id : 2, couleur : "rouge"},
        {id : 3, couleur : "jaune"},
        {id : 4, couleur : "bleunoir"}
    ])
    
    const changeImage = (event) => {
     if(event.currentTarget.name == "noir"){
         setChangeColorBike("noir")
     }else if(event.currentTarget.name == "rouge"){
        setChangeColorBike("rouge")
     }else if(event.currentTarget.name == "jaune"){
        setChangeColorBike("jaune")
     }else if(event.currentTarget.name == "bleunoir"){
        setChangeColorBike("bleunoir")
     }
    } 
    return ( 
        <>
            <BandeauMenu idBandeau="VTT" velo1 = "X-Rigide" velo2 = "X-Susp" Titre = "VTT" url1 = "/vttrigide" url2="/vttsusp" />
            <div className="row container-global-route" >             
                <div className="col-md-12 col-lg-6 text-center container-image">
                        <img src={changeColorBike == "noir" ? suspnoir 
                        : changeColorBike == "rouge" ? susprouge
                        : changeColorBike == "jaune" ? suspjaune
                        : suspbleunoir
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-md-12 col-lg-6 container-description">
                        <h6 className="row text-uppercase"> X-Susp</h6>
                        <p className="row pt-4 presentation"> Ce cadre VTT en fibre de carbone T800 vous aidera dans les terrains les plus escarpés et difficils, pour gravir les plus hauts sommets et vous poussera sur les plus longues distances.</p>
                        <div className="row">
                            <h4 className=""> Vélo complet à partir de  <span className="prix"> {prix} &euro; </span> TTC </h4>
                        </div>
                        <div className="row">
                            <hr className="col-md-3" /> 
                            <h5 className="col-md-4 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="col-md-3"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="noir" onMouseOver={changeImage}  className="carrenoir d-inline-block"></button>
                           <button type="button" name="rouge" onMouseOver={changeImage} className="carrerouge d-inline-block"></button>
                           <button type="button" name="jaune" onMouseOver={changeImage} className="carrejaune d-inline-block"></button>
                           <button type="button" name="bleunoir" onMouseOver={changeImage} className="carrebleunoir d-inline-block"></button>
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
                        bikeBleuNoir={suspbleunoir}
                        bikeNoir={suspnoir}
                        bikeRouge={susprouge}
                        bikeJaune={suspjaune}
                        dataCouleur={dataCouleur}
                        dataBike ={dataBike}
                        />        
            
                    </>
                </div>
        </>
     );
}

 
export default VttSusp;
import '../../styles/routeStyle.css';
import React,{useState} from 'react';
import FormFormik from "../component/FormFormik";
import BandeauMenu from "../component/BandeauMenu";
import rougecyclo from "../images/cyclocross/rougecyclo.jpg";
import vertcyclo from "../images/cyclocross/vertcyclo.jpg";
import noircyclo from "../images/cyclocross/noircyclo.jpg";
import bleucyclo from "../images/cyclocross/bleucyclo.jpg";

const Cyclocross = ({panier,prevPanier}) => {
    const[changeColorBike, setChangeColorBike] = useState("noir");
    const[prix,setPrix] = useState(1099);

    const [dataBike,setDataBike]=useState({
        modele : "XR-Cyclo",
        type : "Cyclocross",
        url : "kit_cyclocrosses"
    });
    const [dataCouleur,setDataCouleur]=useState([
        {id : 1, couleur : "noir"},
        {id : 2, couleur : "rouge"},
        {id : 3, couleur : "bleu"},
        {id : 4, couleur : "vert"}
    ])
    
    const changeImage = (event) => {
        if(event.currentTarget.name == "noir"){
            setChangeColorBike("noir")
        }else if(event.currentTarget.name == "rouge"){
            setChangeColorBike("rouge")
        }else if(event.currentTarget.name == "vert"){
            setChangeColorBike("vert")
        }else
        {setChangeColorBike("bleu")}
    } 
    return ( 
        <>
             <BandeauMenu idBandeau = "Cyclocross" velo1= "XC-Cyclo" Titre="Cyclocross" url1="/cyclocross" />
             <div className="row container-global-route" >
                    <div className="col-md-12 col-lg-6 text-center container-image">
                        <img src={changeColorBike == "noir" ? noircyclo
                        : changeColorBike == "rouge" ? rougecyclo
                        : changeColorBike == "vert" ? vertcyclo
                        : bleucyclo
                        
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-md-12 col-lg-6 container-description">
                        <h6 className="row text-uppercase"> XC-Cyclo </h6>
                        <p className="row pt-4 presentation"> Un cadre parfait pour les courses de cyclocross sur terrains très difficiles, déclipsage rapide.</p>
                        <div className="row">
                            <h4> Vélo complet à partir de  <span className="prix"> {prix} &euro; </span> TTC </h4>
                        </div>
                        <div className="row">
                            <hr className="col-md-3" /> 
                            <h5 className="col-md-4 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="col-md-3"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="noir" onMouseOver={changeImage}  className="carrenoir d-inline-block"></button>
                           <button type="button" name="rouge" onMouseOver={changeImage} className="carrerouge d-inline-block"></button>
                           <button type="button" name="bleu" onMouseOver={changeImage} className="carrebleu d-inline-block"></button>
                           <button type="button" name="vert" onMouseOver={changeImage} className="carrevert d-inline-block"></button>
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
                        bikeNoir={noircyclo}
                        bikeVert={vertcyclo}
                        bikeRouge={rougecyclo}
                        bikeBleu = {bleucyclo}
                        dataCouleur = {dataCouleur}
                        dataBike={dataBike}
                        />        
            
                    </>
                </div>
        </>
     );
}

 
export default Cyclocross;
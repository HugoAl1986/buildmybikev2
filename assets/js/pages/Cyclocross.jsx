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
    const[submitForm,setSubmitForm]=useState(false);

    const [dataBike,setDataBike]=useState({
        modele : "XR-Cyclo",
        type : "Cyclocross",
        url : "kit_cyclocrosses"
    });
    const [dataCouleur,setDataCouleur]=useState([
        {id : 1, couleur : "noir"},
        {id : 2, couleur : "rouge"},
        {id : 3, couleur : "bleu"},
        {id : 3, couleur : "vert"}
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
            <div className="row pt-5 pb-5" >
               
                    <div className="col-6 text-center">
                        <img src={changeColorBike == "noir" ? noircyclo
                        : changeColorBike == "rouge" ? rougecyclo
                        : changeColorBike == "vert" ? vertcyclo
                        : bleucyclo
                        
                        } 
                        alt="imagecadre" class="img-thumbnail"/>
                    </div>
                    <div className="col-6 pt-4">
                        <h6 className="row text-uppercase"> XC-Cyclo </h6>
                        <p className="row pt-4 presentation"> Un cadre parfait pour les courses de cyclocross sur terrains très difficiles, déclipsage rapide.</p>
                        <div className="row pt-4">
                        <h4 className=""> Vélo complet à partir de  <span className="prix"> {prix} &euro; </span> TTC </h4>
                        </div>
                        <div className="row pt-5">
                            <hr className="d-inline col-2" /> 
                            <h5 className="d-inline col-6 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="d-inline col-2"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="noir" onMouseOver={changeImage}  className="carrenoir d-inline-block"></button>
                           <button type="button" name="rouge" onMouseOver={changeImage} className="carrerouge d-inline-block"></button>
                           <button type="button" name="bleu" onMouseOver={changeImage} className="carrebleu d-inline-block"></button>
                           <button type="button" name="vert" onMouseOver={changeImage} className="carrevert d-inline-block"></button>
                        </div>
                    </div>
            </div>
                <div className="row"> 
                           <div className="col-5 col-sm-5 col-xs-5 pt-4 pb-4"><hr className="hrConfigurateur w-100" /></div>
                           <div className="col-2 col-sm-2 col-xs-2 pt-4 pb-4 justify-content-center text-center border border-dark"> CONFIGURATEUR </div>
                           <div className="col-5 col-sm-5 col-xs-5 pt-4 pb-4"> <hr className="hrConfigurateur w-100"/></div>
                </div>  

                {/* Formulaire Formik */}

                <div className="row"> 
                    <> 
                    <FormFormik 
                        panier={panier} 
                        prevPanier={prevPanier}
                        submitForm={submitForm} 
                        setSubmitForm={setSubmitForm} 
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
import '../../styles/routeStyle.css';
import React,{useState} from 'react';
import chevron from '../images/chevron.png';
import sharpbleu from "../images/aerobike/sharpbleu.jpg"
import sharporange from "../images/aerobike/sharporange.jpg"
import sharprouge from "../images/aerobike/sharprouge.jpg"
import sharpjaune from "../images/aerobike/sharpjaune.jpg"
import FormFormik from "../component/FormFormik";
import BandeauMenu from "../component/BandeauMenu";

const RouteBike = ({panier,prevPanier}) => {
    const[changeColorBike, setChangeColorBike] = useState("bleu");
    const[prix,setPrix] = useState(1699);
    const[submitForm,setSubmitForm]=useState(false);

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
            <div className="row pt-5 pb-5" >
               
                    <div className="col-6 text-center">
                        <img src={changeColorBike == "bleu" ? sharpbleu 
                        : changeColorBike == "rouge" ? sharprouge 
                        : changeColorBike == "orange" ? sharporange
                        : sharpjaune
                        } 
                        alt="imagecadre" class="img-thumbnail"/>
                    </div>
                    <div className="col-6 pt-4">
                        <h6 className="row text-uppercase"> Aero </h6>
                        <p className="row pt-4 presentation"> Ce cadre aéro est léger, rigide, et dynamique parfait pour les coursiers ou cyclosportifs.</p>
                        <div className="row pt-4">
                        <h4 className=""> Vélo complet à partir de  <span className="prix"> 1699.00 &euro; </span> TTC </h4>
                        </div>
                        <div className="row pt-5">
                            <hr className="d-inline col-2" /> 
                            <h5 className="d-inline col-6 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="d-inline col-2"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="bleu" onMouseOver={changeImage}  className="carrebleu d-inline-block"></button>
                           <button type="button" name="jaune" onMouseOver={changeImage} className="carrejaune d-inline-block"></button>
                           <button type="button" name="orange" onMouseOver={changeImage} className="carreorange d-inline-block"></button>
                           <button type="button" name="rouge" onMouseOver={changeImage} className="carrerouge d-inline-block"></button>
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
                    {console.log(submitForm)}
                    <FormFormik 
                        panier={panier} 
                        prevPanier={prevPanier}
                        submitForm={submitForm} 
                        setSubmitForm={setSubmitForm} 
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
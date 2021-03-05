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
    const[submitForm,setSubmitForm]=useState(false);

    const[dataBike,setDataBike]=useState({
        type : "Vtt",
        cadre : "XSusp",
        modele : "X-Susp",
        url : "kit_vtts"
    })

    const [dataCouleur,setDataCouleur]=useState([
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
            <div className="row pt-5 pb-5" >
               
                    <div className="col-6 text-center">
                        <img src={changeColorBike == "noir" ? suspnoir 
                        : changeColorBike == "rouge" ? susprouge
                        : changeColorBike == "jaune" ? suspjaune
                        : suspbleunoir
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-6 pt-4">
                        <h6 className="row text-uppercase"> X-Susp</h6>
                        <p className="row pt-4 presentation"> Ce cadre VTT en fibre de carbone T800 vous aidera dans les terrains les plus escarpés et difficils, pour gravir les plus hauts sommets et vous poussera sur les plus longues distances.</p>
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
                           <button type="button" name="jaune" onMouseOver={changeImage} className="carrejaune d-inline-block"></button>
                           <button type="button" name="bleunoir" onMouseOver={changeImage} className="carrebleunoir d-inline-block"></button>
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
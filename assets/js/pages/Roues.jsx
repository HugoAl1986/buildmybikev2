import React,{useState} from 'react';
import treshaute from "../images/Roues/treshaute.jpg"
import haute from "../images/Roues/haute.jpg"
import moyenne from "../images/Roues/moyenne.jpg"
import basse from "../images/Roues/basse.jpg"
import BandeauMenu from "../component/BandeauMenu";
import '../../styles/routeStyle.css';
import FormFormikRoues from "../component/FormFormikRoues";

const VttSusp = ({panier,prevPanier}) => {
    const[changeHauteurRoues, setChangeHauteurRoues] = useState("80mm");
    const[prix,setPrix] = useState(700);
    const[submitForm,setSubmitForm]=useState(false);

    const[dataBike,setDataBike]=useState({
        type : "Roues",
        couleur : "noir",
        url : "kit_roues"
    })

    const [dataHauteur,setDataHauteur]=useState([
        {id : 1, Hauteur : "30mm"},
        {id : 2, Hauteur : "38mm"},
        {id : 3, Hauteur : "50mm"},
        {id : 4, Hauteur : "80mm"}
    ])
    
    const changeImage = (event) => {
     if(event.currentTarget.name == "30mm"){
         setChangeHauteurRoues("30mm")
     }else if(event.currentTarget.name == "38mm"){
        setChangeHauteurRoues("38mm")
     }else if(event.currentTarget.name == "50mm"){
        setChangeHauteurRoues("50mm")
     }else if(event.currentTarget.name == "80mm"){
        setChangeHauteurRoues("80mm")
     }
    } 
    return ( 
        <>
            <BandeauMenu idBandeau="Roues" velo1 = "Roues" Titre = "Roues" url1 = "/roues" />
            <div className="row pt-5 pb-5" >
               
                    <div className="col-6 text-center" id="imgcadre">
                        <img src={changeHauteurRoues == "30mm" ? basse
                        : changeHauteurRoues == "38mm" ? moyenne
                        : changeHauteurRoues == "50mm" ? haute
                        : treshaute
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-6 pt-4">
                        <h6 className="row text-uppercase"> Roues</h6>
                        <p className="row pt-4 presentation"> 4 modèles de roues selon le profil que vous souhaitez pleine vitesse, terrains escarpées ou moyenne montagne ou très haute montagne.</p>
                        <div className="row pt-4">
                        <h4 className=""> Roues à partir de  <span className="prix"> {prix} &euro; </span> TTC </h4>
                        </div>
                        <div className="row pt-5">
                            <hr className="d-inline col-2" /> 
                            <h5 className="d-inline col-6 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="d-inline col-2"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="30mm" onMouseOver={changeImage}  className="roues d-inline-block">30 mm</button>
                           <button type="button" name="38mm" onMouseOver={changeImage} className="roues d-inline-block"> 38 mm</button>
                           <button type="button" name="50mm" onMouseOver={changeImage} className="roues d-inline-block">50 mm</button>
                           <button type="button" name="80mm" onMouseOver={changeImage} className="roues d-inline-block">80 mm</button>
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
                    <FormFormikRoues 
                        panier={panier} 
                        prevPanier={prevPanier}
                        submitForm={submitForm} 
                        setSubmitForm={setSubmitForm} 
                        prix={prix}
                        setPrix={setPrix}
                        basse={basse}
                        moyenne={moyenne}
                        haute={haute}
                        treshaute={treshaute}
                        dataHauteur={dataHauteur}
                        dataBike ={dataBike}
                        />        
            
                    </>
                </div>
        </>
     );
}

 
export default VttSusp;
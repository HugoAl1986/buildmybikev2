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
            <div className="row container-global-route" >             
                    <div className="col-md-12 col-lg-6 text-center container-image">
                        <img src={changeHauteurRoues == "30mm" ? basse
                        : changeHauteurRoues == "38mm" ? moyenne
                        : changeHauteurRoues == "50mm" ? haute
                        : treshaute
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-md-12 col-lg-6 container-description">
                        <h6 className="row text-uppercase"> Roues</h6>
                        <p className="row pt-4 presentation"> 4 modèles de roues selon le profil que vous souhaitez pleine vitesse, terrains escarpés, moyenne montagne ou très haute montagne.</p>
                        <div className="row">
                            <h4> Roues à partir de  <span className="prix"> {prix} &euro; </span> TTC </h4>
                        </div>
                        <div className="row">
                            <hr className="col-md-3" /> 
                            <h5 className="col-md-4 text-center text-uppercase"> Choisis ta hauteur</h5> 
                            <hr className="col-md-3"/>
                        </div>
                        <div className="row pt-4 container-button-roues">
                           <button type="button"  name="30mm" onMouseOver={changeImage}  className="roues d-inline-block">30 mm</button>
                           <button type="button" name="38mm" onMouseOver={changeImage} className="roues d-inline-block"> 38 mm</button>
                           <button type="button" name="50mm" onMouseOver={changeImage} className="roues d-inline-block">50 mm</button>
                           <button type="button" name="80mm" onMouseOver={changeImage} className="roues d-inline-block">80 mm</button>
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
                    <FormFormikRoues 
                        panier={panier} 
                        prevPanier={prevPanier}
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
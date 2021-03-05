import React,{useState} from 'react';
import rigidebleu from "../images/VTTRigide/rigidebleu.jpg"
import rigideblanc from "../images/VTTRigide/rigideblanc.jpg"
import rigidegris from "../images/VTTRigide/rigidegris.jpg"
import rigiderougejaune from "../images/VTTRigide/rigiderougejaune.jpg"
import FormFormik from "../component/FormFormik";
import BandeauMenu from "../component/BandeauMenu";
import '../../styles/routeStyle.css';

const VttRigide = ({panier,prevPanier}) => {
    const[changeColorBike, setChangeColorBike] = useState("bleu");
    const[prix,setPrix] = useState(1399);
    const[submitForm,setSubmitForm]=useState(false);

    const[dataBike,setDataBike]=useState({
        type : "Vtt",
        cadre : "XRigide",
        modele : "X-Rigide",
        url : "kit_vtts"
    })

    const [dataCouleur,setDataCouleur]=useState([
        {id : 1, couleur : "blanc"},
        {id : 2, couleur : "bleu"},
        {id : 3, couleur : "gris"},
        {id : 4, couleur : "rougejaune"}
    ])
    
    const changeImage = (event) => {
     if(event.currentTarget.name == "blanc"){
         setChangeColorBike("blanc")
     }else if(event.currentTarget.name == "bleu"){
        setChangeColorBike("bleu")
     }else if(event.currentTarget.name == "rougejaune"){
        setChangeColorBike("rougejaune")
     }else if(event.currentTarget.name == "gris"){
        setChangeColorBike("gris")
     }
    } 
    return ( 
        <>
            <BandeauMenu idBandeau="VTT" velo1 = "X-Rigide" velo2 = "X-Susp" Titre = "VTT" url1 = "/vttrigide" url2="/vttsusp" />
            <div className="row pt-5 pb-5" >
               
                    <div className="col-6 text-center">
                        <img src={changeColorBike == "bleu" ? rigidebleu 
                        : changeColorBike == "blanc" ? rigideblanc
                        : changeColorBike == "gris" ? rigidegris
                        : rigiderougejaune
                        } 
                        alt="imagecadre" class="img-thumbnail"/>
                    </div>
                    <div className="col-6 pt-4">
                        <h6 className="row text-uppercase"> X-Rigide</h6>
                        <p className="row pt-4 presentation"> Ce cadre VTT en fibre de carbone T800 ravira tous les cyclosportifs passionnés, grâce à son confort et sa légèreté.</p>
                        <div className="row pt-4">
                        <h4 className=""> Vélo complet à partir de  <span className="prix"> {prix} &euro; </span> TTC </h4>
                        </div>
                        <div className="row pt-5">
                            <hr className="d-inline col-2" /> 
                            <h5 className="d-inline col-6 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="d-inline col-2"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="bleu" onMouseOver={changeImage}  className="carrebleufonce d-inline-block"></button>
                           <button type="button" name="rougejaune" onMouseOver={changeImage} className="carrerougejaune d-inline-block"></button>
                           <button type="button" name="gris" onMouseOver={changeImage} className="carregris d-inline-block"></button>
                           <button type="button" name="blanc" onMouseOver={changeImage} className="carreblanc d-inline-block"></button>
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
                        bikeBleu={rigidebleu}
                        bikeGris={rigidegris}
                        bikeBlanc={rigideblanc}
                        bikeRougeJaune={rigiderougejaune}
                        dataCouleur={dataCouleur}
                        dataBike ={dataBike}
                        />        
            
                    </>
                </div>
        </>
     );
}

 
export default VttRigide;
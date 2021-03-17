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
    const[dataBike,setDataBike]=useState({
        type : "Vtt",
        cadre : "XRigide",
        modele : "X-Rigide",
        url : "kit_vtts"
    })

    const [dataCouleur]=useState([
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
            <div className="row container-global-route" >                           
                    <div className="col-md-12 col-lg-6 text-center container-image">
                        <img src={changeColorBike == "bleu" ? rigidebleu 
                        : changeColorBike == "blanc" ? rigideblanc
                        : changeColorBike == "gris" ? rigidegris
                        : rigiderougejaune
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-md-12 col-lg-6 container-description">
                        <h6 className="row text-uppercase"> X-Rigide</h6>
                        <p className="row pt-4 presentation"> Ce cadre VTT en fibre de carbone T800 ravira tous les cyclosportifs passionnés, grâce à son confort et sa légèreté.</p>
                        <div className="row pt-4">
                        <h4 className=""> Vélo complet à partir de  <span className="prix"> {prix} &euro; </span> TTC </h4>
                        </div>
                        <div className="row">
                            <hr className="col-md-3" /> 
                            <h5 className="col-md-4 text-center text-uppercase"> Choisis ta couleur</h5> 
                            <hr className="col-md-3"/>
                        </div>
                        <div className="row pt-4 justify-content-center m-0">
                           <button type="button"  name="bleu" onMouseOver={changeImage}  className="carrebleufonce d-inline-block"></button>
                           <button type="button" name="rougejaune" onMouseOver={changeImage} className="carrerougejaune d-inline-block"></button>
                           <button type="button" name="gris" onMouseOver={changeImage} className="carregris d-inline-block"></button>
                           <button type="button" name="blanc" onMouseOver={changeImage} className="carreblanc d-inline-block"></button>
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
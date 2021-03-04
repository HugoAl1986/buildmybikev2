import '../../styles/routeStyle.css';
import React,{useState} from 'react';
import FormFormik from "../component/FormFormik";
import BandeauMenu from "../component/BandeauMenu";
import noirtri from "../images/triathlon/noirtri.jpg";
import noirjaunetri from "../images/triathlon/noirjaunetri.jpg";
import rougenoirtri from "../images/triathlon/rougenoirtri.jpg";

const Triathlon = ({panier,prevPanier}) => {
    const[changeColorBike, setChangeColorBike] = useState("noir");
    const[prix,setPrix] = useState(1599);
    const[submitForm,setSubmitForm]=useState(false);

    const [dataBike,setDataBike]=useState({
        modele : "TriPowa",
        type : "Triathlon",
        url : "kit_triathlons"
    });
    const [dataCouleur,setDataCouleur]=useState([
        {id : 1, couleur : "noir"},
        {id : 2, couleur : "noirjaune"},
        {id : 3, couleur : "rougenoir"}
    ])
    
    const changeImage = (event) => {
     if(event.currentTarget.name == "noir"){
         setChangeColorBike("noir")
     }else if(event.currentTarget.name == "noirjaune"){
        setChangeColorBike("noirjaune")
     }else{
        setChangeColorBike("rougenoir")
     }
    } 
    return ( 
        <>
             <BandeauMenu idBandeau = "Tri" velo1= "Tri-Powa" Titre="Triathlon" url1="/triathlon" />
            <div className="row pt-5 pb-5" >
               
                    <div className="col-6 text-center">
                        <img src={changeColorBike == "noir" ? noirtri
                        : changeColorBike == "noirjaune" ? noirjaunetri
                        : rougenoirtri
                        
                        } 
                        alt="imagecadre" class="img-thumbnail"/>
                    </div>
                    <div className="col-6 pt-4">
                        <h6 className="row text-uppercase"> Tri-Powa </h6>
                        <p className="row pt-4 presentation"> Un cadre spécifique pour triathletes ou spécialistes du clm pour tire des longs bouts droits à pleine vitesse.</p>
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
                           <button type="button" name="noirjaune" onMouseOver={changeImage} className="carrenoirjaune d-inline-block"></button>
                           <button type="button" name="rougenoir" onMouseOver={changeImage} className="carrerougenoir d-inline-block"></button>
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
                        bikeNoir={noirtri}
                        bikeNoirJaune={noirjaunetri}
                        bikeRougeNoir={rougenoirtri}
                        dataCouleur = {dataCouleur}
                        dataBike={dataBike}
                        />        
            
                    </>
                </div>
        </>
     );
}

 
export default Triathlon;
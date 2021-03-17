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
             <div className="row container-global-route" >                           
                    <div className="col-md-12 col-lg-6 text-center container-image">
                        <img src={changeColorBike == "noir" ? noirtri
                        : changeColorBike == "noirjaune" ? noirjaunetri
                        : rougenoirtri
                        
                        } 
                        alt="imagecadre" className="img-thumbnail"/>
                    </div>
                    <div className="col-md-12 col-lg-6 container-description">
                        <h6 className="row text-uppercase"> Tri-Powa </h6>
                        <p className="row pt-4 presentation"> Un cadre spécifique pour triathletes ou spécialistes du clm pour tire des longs bouts droits à pleine vitesse.</p>
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
                           <button type="button" name="noirjaune" onMouseOver={changeImage} className="carrenoirjaune d-inline-block"></button>
                           <button type="button" name="rougenoir" onMouseOver={changeImage} className="carrerougenoir d-inline-block"></button>
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
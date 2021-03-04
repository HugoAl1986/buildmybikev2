import React from 'react';
import chevron from '../images/chevron.png';
import {Link} from 'react-router-dom';
const BandeauMenu = ({velo1,velo2,Titre,url1,url2,idBandeau}) => {
    return (  
    
    <div className="container-fluid pl-0 pr-0" id={"bandeauMenu"+idBandeau}>
        <div className="row justify-content-center">
            <h5 className="text-uppercase mt-4"> {Titre !== "Roues" ? `Cadre ${Titre}` : Titre}</h5>   
        </div>
        <div className="row justify-content-center w-50 mx-auto">
                <span><img src={chevron} alt="chevron" width="15px"/></span>
                {url2 == null || undefined ? 
                    <span className={`BikeItem${idBandeau} text-uppercase`}>{velo1}</span>
                    :
                <Link to={url1} className={`BikeItem${idBandeau} text-uppercase`}>{velo1}</Link>
                } 
                <span><img src={chevron} alt="chevron" width="15px"/></span>
                {url2 == null || undefined ? null :
                    <>
                        <Link to={url2} className={`BikeItem${idBandeau} text-uppercase`}>{velo2}</Link>
                        <span><img src={chevron} alt="chevron" width="15px"/></span>
                    </>
                }
        </div>
    </div> 
);
}
 
export default BandeauMenu;
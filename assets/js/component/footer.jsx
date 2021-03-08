import React from 'react';
import phone from '../images/phone.svg';
import mail  from '../images/mail.svg';
import '../../styles/footer.css'

const Footer = () => {
   
    return(
        <>
            
            <div className="row footer d-flex justify-content-end align-items-center">
                <p className="p-3 ml-1 m-0 d-flex align-items-center"> 
                    <span className="pr-2 text-uppercase font-weight-bold"> Contactez-Nous : </span>
                    <img src={phone} className="img-fluid" width="25px" height="25px" />
                    <span className="pl-2 pr-2"> 06 77 90 18 46 </span> 
                    <img src={mail} className="img-fluid" width="25px" height="25px"/>
                    <a className="pl-2" href="mailto:buildmybike@gmail.com">buildmybike@gmail.com</a>
                </p>
            </div>
            <div className="row copy">
               <p className="p-3 ml-1 m-0"> &copy; 2021 Crée par HugoAl. Tous droits réservés</p>
            </div>
        </>
    )

}
export default Footer;
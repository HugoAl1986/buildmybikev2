import React from 'react';
import logo from '../images/logo.png';
import address from '../images/address.svg';
import phone from '../images/phone.svg';
import mail  from '../images/mail.svg';
import '../../styles/footer.css'

const Footer = () => {
   
    return(
        <>
            <div className="row footer">
                <div className="col-4 p-3 pt-5 pb-5">
                    <img src={logo} alt="" className="img-fluid w-25 mx-auto d-block"/>
                    <p className="pt-2 text-center"> Vélo au meilleur prix, la personnalisation est offerte.</p>
                </div>
                <div className="col-2 p-3 pt-5 pb-5">
                <table className="table-borderless text-left">
                    <thead>
                        <tr>
                            <th className="text-uppercase"> Categorie </th> 
                        </tr>                      
                    </thead>
                    <tbody>
                        <tr>
                            <td> <a href="#"> Route</a> </td>
                        </tr>
                        <tr> 
                            <td> <a href="#"> Vtt </a> </td>
                        </tr>
                        <tr> 
                            <td> <a href="#"> Triathlon </a></td>
                        </tr>
                        <tr>
                            <td> <a href="#"> Cyclocross </a></td>
                        </tr>
                        <tr> 
                            <td><a href="#">Piste</a></td>
                        </tr>
                          
                    </tbody>
                </table>
                </div>
                <div className="col-2 p-3 pt-5 pb-5">
                <table className="table-borderless text-left">
                    <thead>
                        <tr>
                            <th className="text-uppercase"> Mon Compte </th> 
                        </tr>                      
                    </thead>
                    <tbody>
                        <tr>
                            <td> <a href="#"> Mes commandes </a> </td>
                        </tr>
                        <tr> 
                            <td> <a href="#"> Mes avoirs </a> </td>
                        </tr>
                        <tr> 
                            <td> <a href="#"> Mes adresses </a></td>
                        </tr>
                        <tr>
                            <td> <a href="#"> Mes informations personnelles </a></td>
                        </tr>
                        <tr> 
                            <td><a href="#">Mes bons de réduction</a></td>
                        </tr>
                          
                    </tbody>
                </table>
                </div>
                <div className="col-4 p-3 pt-5 pb-5">
                    <table className="table-borderless text-left align-items-center justify-content-center">
                        <thead>
                            <tr>
                                <th className="text-uppercase contact"> Contactez-nous </th> 
                            </tr>                      
                        </thead>
                        <tbody>
                            <tr className="row">
                                <td className="col-2"> 
                                    <img src={address} alt="logoaddress" className="img-fluid" width="20" heigth="20"/> 
                                </td>
                                <td className="col-10"><span> 48 Rue du Mesnil - 60119 Henonville </span> </td>
                            </tr>
                            <tr className="row"> 
                                <td className="col-2">  <img src={phone} alt="logoaddress" className="img-fluid" width="20" heigth="20"/> </td>
                                <td className="col-10"><span> 06 77 90 18 46 </span> </td>
                            </tr>
                            <tr className="row"> 
                                <td className="col-2"> <img src={mail} alt="logomail" className="img-fluid"/> </td> 
                                <td className="col-10"> <a href="#"> hugo.arcal@gmail.com </a></td>
                            </tr>     
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container-fluid m-0 copy">
               <p className="p-3 m-0"> &copy; 2021 Crée par HugoAl. Tous droits réservés</p>

            </div>

        </>
    )

}
export default Footer;
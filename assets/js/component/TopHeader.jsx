import React from 'react';
import iconuser  from '../images/iconuser.svg';
import frenchflag from '../images/frenchflag.svg';
import panier from '../images/panier.svg';

const TopHeader = (props) => {
    return ( 
        
        <>
        
                <ul className="nav bg-dark pt-1 pb-1">
                    <div className="container-fluid ">
                        <div className="row">
                    <li className="nav-item pr-3 col-10 text-right">
                            <img className="h-100 d-inline-block img-fluid" src={iconuser} alt="iconuser" width="30" height="30"/>
                        <a className=" d-inline-block pl-0" Style="font-size:smaller; text-decoration:none" href="#">  MON COMPTE </a> 
                    </li>   
                    <li className="nav-item text-center col col-sm-auto mx-auto">
                        <a href="#"><img className="h-100 d-inline-block img-fluid" src={panier} alt="panier" width="30" height="30"/></a>
                    </li>  
                    <li className="nav-item pr-2 text-right col col-sm-auto mx-auto">
                        <img src={frenchflag} className="h-100 d-inline-block img-fluid"  alt="frenchflag" width="15" height="15"/>  
                        <a className="pl-1 d-inline-block" Style="font-size:smaller; text-decoration:none" href="#"> FRANCE </a>   
                    </li> 
                    </div>
                    </div> 
                </ul>
                
      </>
     );
}
 
export default TopHeader;
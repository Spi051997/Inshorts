import React from "react";
import Hambergerdrwer from "../Hambergerdrwer";
import './Nav.css';




const Nav=({setcategory})=>
{
    // console.log(setcategory);

   return(
       <div className="nav">
           <div className="iconn">
               {/* we pass this setcategory to hamburgerdrwaer */}
             <Hambergerdrwer setcategory={setcategory} />

           </div>
           <div className="logoclass" >
               <img  className="logosize"  alt="logo" src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" />
           </div>
       </div>
   )
}

export default Nav;
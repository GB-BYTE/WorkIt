import React from "react";
import ig from '../assets/images/icon-instagram.svg';
import fb from '../assets//images/icon-facebook.svg';
import x from '../assets/images/icon-twitter.svg';
const Footer = () => {
    return ( 
        <div className="w-[100%] bg-white flex justify-center  ">
            <div className="max-w[1700px] py-[112px]">
             <p className="text-black text-xl xs:text-[12px] text-center "><b>Work</b>it</p>                                                                                                                 
               <div className="flex gap-5 pt-4 justify-center">
                 <img src={ig}  alt="" />
                 <img src={fb}  alt="" />
                 <img src={x}  alt="" />
               </div>
            </div>
        
        </div>
     );
}
 
export default Footer;
import React,{useEffect} from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";


const Footer = () => {
  useEffect(()=>{
    const time = () => {
      document.getElementById('year').innerHTML = new Date().getFullYear();
    };
    time();
  })
  return (
    <div>
      <div className="bg-navbarBg text-yellow-400">
        <div className="socials flex xl:gap-28 sm:gap-10  text-3xl justify-center py-6 ">
          <div className="tooltip tooltip-right opacity-55 hover:opacity-100 hover:duration-700 cursor-pointer"
           data-tip="Linkedin">
          <a href="#"><SlSocialLinkedin /></a>
          </div>
        <div className="tooltip tooltip-right opacity-55 hover:opacity-100 hover:duration-700 cursor-pointer" data-tip="Instagram">
        <a href="#"><SlSocialInstagram /></a>
        </div>
        <div className="tooltip tooltip-right opacity-55 hover:opacity-100 hover:duration-700 cursor-pointer" data-tip="Facebook">
       <a href="#"><SlSocialFacebook /></a> 
        </div>
        <div className="tooltip tooltip-right opacity-55 hover:opacity-100 hover:duration-700 cursor-pointer" data-tip="X">
        <a href="#"><i className="ri-twitter-x-line"></i></a>
        </div>
        
        </div>
       
      
      <div  className="flex gap-4 justify-center py-2 "> 
        <span></span>
          <span id='year'></span>
          <span>Copyrights reserved.</span>
     </div>

      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Innovations from './../Innovations'

const Mediacenter = () => {
  return (
    <div>
      <div className="media bg-[#f7f7f8d2] xl:py-12 sm:py-5 px-5  ">
        <div className="max-w-[90%]">
        <h1 className='font-bold text-3xl flex ml-14 py-6'>Latest from the Media Centre</h1>
        <div className="links xl:w-[85%] sm:w-[95%]  mx-auto px-4 text-navbarBg">
         <p className='opacity-75 uppercase text-[13px] py-5'>
            11 sept 2024/Press release
         </p>
         <a href="#" className="hover:text-orange-400 duration-500 text-xl py-4 flex items-center group border-b-2 border-navbarBg">
         <span className="duration-500 transform group-hover:translate-x-3 mr-2">
                <i className="ri-arrow-right-double-fill"></i>
                   </span>
                      3rdGB Plc Releases 2024 Half Year Audited Results... Reports Profit Before Tax of ₦1.004trillion
            </a>


         <p className='opacity-75 uppercase text-[13px] py-5'>
            11 sept 2024/Press release
         </p>
         <a href="#" className="hover:text-orange-400 duration-500 text-xl py-4 flex items-center group border-b-2 border-navbarBg">
         <span className="duration-500 transform group-hover:translate-x-3 mr-2">
          <i className="ri-arrow-right-double-fill"></i>
          </span>
          3rdGB Plc Releases 2024 Half Year Audited Results... Reports Profit Before Tax of ₦1.004trillion
           </a>


         <p className='opacity-75 uppercase text-[13px] py-5'>
            11 sept 2024/Press release
         </p>
         <a href="#" className="hover:text-orange-400 duration-500 text-xl py-4 flex items-center group border-b-2 border-navbarBg">
          <span className="duration-500 transform group-hover:translate-x-3 mr-2">
           <i className="ri-arrow-right-double-fill"></i>
         </span>
           3rdGB Plc Releases 2024 Half Year Audited Results... Reports Profit Before Tax of ₦1.004trillion
         </a>


         <p className='opacity-75 uppercase text-[13px] py-5'>
            11 sept 2024/Press release
         </p>
         <a href="#" className="hover:text-orange-400 duration-500 text-xl py-4 flex items-center group border-b-2 border-navbarBg">
        <span className="duration-500 transform group-hover:translate-x-3 mr-2">
        <i className="ri-arrow-right-double-fill"></i>
        </span>
         3rdGB Plc Releases 2024 Half Year Audited Results... Reports Profit Before Tax of ₦1.004trillion
      </a>

        <button className='bg-navbarBg mt-5 text-yellow-400 rounded-br-3xl rounded-tl-3xl transform group hover:translate-x-3 duration-300'>
            <a href="#" className="flex gap-2 py-2 px-2">
            Vist the Media Center
             <FaArrowRight className='mt-[6px] ' /></a>
        </button>

        </div>
        </div>
        
      </div>
      <Innovations/>
    </div>
  )
}

export default Mediacenter

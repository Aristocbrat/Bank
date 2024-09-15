import React from 'react'
import { IoIosRibbon } from "react-icons/io";
import { IoShield } from "react-icons/io5";

const Avouthead = () => {
  return (
    <div>
      <div className="bg-aboutbg max-w-full h-[500px] bg-cover bg-center">
      <div className="card bg-navbarBg text-yellow-400  xl:w-[450px] sm:w-[85%] relative xl:top-44 sm:top-20 xl:left-20">
            <div className="card-body items-center text-center">
           <h2 className="card-title text-3xl font-bold">
           Delivering the Utmost in Customer Service
           </h2>
           <p>We are synonymous with innovation, building 
            excellence, superior financial performance 
            and creating role models for society.</p>
          <div className="card-actions justify-center text-2xl">
          <IoIosRibbon />
          <IoShield /> 
       </div>
        </div>
</div>
      </div>
    </div>
  )
}

export default Avouthead

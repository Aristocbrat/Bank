import React from 'react'
import { HiChevronDoubleRight } from "react-icons/hi2";
const Cardys = (Cd) => {

  return (
    <div>

       <div className="cardys w-[300px] h-[284px] rounded-xl bg-[#e0e0e0] shadow-box">
        <div className="cardimg">
            <img src={Cd.img} alt="" className='w-full h-[162px] object-cover rounded-t-xl hover:scale-105 duration-500' />
        </div>
        <div className="cardystext">
            <h1 className='text-xl font-bold w-[85%] mx-auto flex justify-center text-blue-950'>{Cd.h1}</h1>
            <p className='font-bold px-2 text-[12px] w-[90%] mx-auto text-blue-950'>{Cd.text}.</p>
        </div> 
        <div className="cardyslinks mt-2">
            <a href="#" className='flex gap-3 w-[60%] mx-auto hover:translate-x-5 duration-500 hover:scale-95'>
                {Cd.linkss}
                <HiChevronDoubleRight className='mt-1'/>
            </a>
        </div>
       </div>
      
    </div>
  )
}

export default Cardys

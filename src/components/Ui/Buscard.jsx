import React from 'react'
import { GiLindenLeaf } from "react-icons/gi";
const Buscard = (props) => {
  return (
    <div>
        <div class="card  w-[300px] h-[300px]  py-5 ">
         <div class="card-inner w-full h-full relative">
          <div class="card-front absolute w-full h-full
      bg-navbarBg text-yellow-400 flex justify-center flex-col items-center text-lg rounded-tl-3xl rounded-br-3xl">
          <p className='text-4xl'>{props.icon}</p>
          <p className='text-3xl uppercase'>{props.title}</p>
           <p className='px-3 w-full py-3 mt-4 gap-3 flex justify-center font-italo text-xl'>{props.text}</p>
          <img src="/mylg.png" alt="" className='w-[100px] h-[40px] object-contain rounded-tl-3xl rounded-br-3xl'/>
    
    </div>
    <div class="card-back bg-[#FFB200] rounded-tr-3xl rounded-bl-3xl
     flex justify-center flex-col items-center text-navbarBg text-lg ">
      <p className='w-ful px-3 py-3 flex justify-center gap-3'><GiLindenLeaf  className='text-3xl'/>{props.btext}</p>
      
      <button className='rounded-tl-3xl rounded-br-3xl p-3 bg-navbarBg text-yellow-500
       hover:scale-50 hover:duration-700 transition hover:ease-in-out'>
        <a href="#" className=''>{props.btn}</a></button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Buscard

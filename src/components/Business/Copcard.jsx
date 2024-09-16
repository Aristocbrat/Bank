import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import img1 from './../../assets/images/card2.jpg'

const Copcard = () => {
  return (
    <div>
     <div id='Copcard' className='overflow-hidden'>
      <div className="bg-white rounded-tl-3xl rounded-br-3xl w-[100%] border-b border-black overflow-hidden copc" > 
         <div className="flex xl:flex-row sm:flex-col justify-center py-6 gap-6">
            <div className="">
                <h1 className='xl:text-2xl sm:text-4xl flex py-3 sm:justify-center xl:justify-start font-extrabold'>Coporate Cards</h1>
                <p className='font-extralight xl:w-[400px] sm:w-[92%] xl:mx-0 flex sm:mx-auto'>
                Whether its facilitating your travels or handling your transactions,
                 our Corporate Cards are the perfect companion for your business.</p>
                <button className='btn  flex w-52 sm:mx-auto xl:mx-0 mt-9 bg-navbarBg text-textc hover:bg-navbarBg hover:translate-x-5 duration-500'>
                  All Coporate cards <IoChevronForwardOutline /> </button>
            </div>
            <div className="text-textc px-4">
            <div className="collapse collapse-arrow bg-navbarBg py-2 border-transparent rounded-tl-3xl rounded-br-3xl">
                 <input type="radio" name="my-accordion-2" defaultChecked />
                   <div className="collapse-title text-xl font-medium">Cop Naira Card</div>
                 <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get a Coporate Naira Card</a>
                </div>
                </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Cop Dollar Card</div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get a Coporate Naira Card</a>
                     </div>
                   </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium">SME Card</div>
          <div className="collapse-content">
          <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get an SME Card </a>
           </div>
           </div>
           <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium flex gap-1">Compare Card</div>
                <div className="collapse-content">
              <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get a Cop Compare card</a>
           </div>
           </div>
            </div>
            <div className="">
              <img src={img1} alt="" className='xl:w-[400px] h-[280px] sm:w-[85%] sm:mx-auto xl:mx-0 rounded-tl-3xl
               rounded-br-3xl object-center object-cover' />
               <div className="absolute xl:mt-[-12%] xl:ml-[12.5%] sm:ml-[42.3%] sm:mt-[-37%] z-30 log">
               <img src="/mylg.png" alt="" className='w-[50px] h-[30px] object-fill  ' />
               </div>
               
            </div>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Copcard

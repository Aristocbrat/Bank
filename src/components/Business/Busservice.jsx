import React from 'react'
import img1 from './../../assets/images/caro1.jpg'
import { IoChevronForwardOutline } from "react-icons/io5";


const Busservice = () => {
  return (
    <div>
          <div id='Busservice' className=''>
      <div className="bg-white rounded-tl-3xl rounded-br-3xl w-[100%] border-b border-black" > 
         <div className="flex xl:flex-row sm:flex-col justify-center xl:py-28 sm:py-12 gap-6">
            <div className="">
                <h1 className='xl:text-5xl sm:text-4xl flex py-3 sm:justify-center xl:justify-start font-extrabold '>Business Services</h1>
                <p className='font-extralight xl:w-[400px] sm:w-[92%] xl:mx-0 flex sm:mx-auto '> Let's take care of your Business.</p>
                <button className='btn  flex w-52 sm:mx-auto xl:mx-0 mt-9 bg-navbarBg text-textc hover:bg-navbarBg hover:translate-x-5 duration-500'>
                  All Business Services <IoChevronForwardOutline /> </button>
            </div>
            <div className="text-textc px-4 overflow-hidden">
            <div className="collapse collapse-arrow bg-navbarBg py-2 border-transparent rounded-tl-3xl rounded-br-3xl">
                 <input type="radio" name="my-accordion-2" defaultChecked />
                   <div className="collapse-title text-xl font-medium">Automated Business System (Gaps)</div>
                 <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>(Gaps)</a>
                </div>
                </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">All e-Business services </div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>e-Business services</a>
                     </div>
                   </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium">Other Services</div>
          <div className="collapse-content">
          <a href="#" className='hover:text-yellow-400 hover:duration-500'>Other Services </a>
           </div>
           </div>
            </div>
            <div className="">
              <img src={img1} alt="" className='xl:w-[400px] h-[280px] sm:w-[85%] sm:mx-auto xl:mx-0 rounded-tl-3xl rounded-br-3xl object-center object-cover' />
              
            </div>
         </div>
      </div>
    </div> 
    </div>
  )
}

export default Busservice

import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import img1 from './../../assets/images/suit.jpg'

const BusAcc = () => {
  return (
    <div>
        <div id='BusAcc' className='overflow-hidden'>
      <div className="bg-white rounded-tl-3xl rounded-br-3xl w-[100%] border-b border-black" > 
         <div className="flex xl:flex-row sm:flex-col justify-center xl:py-24 sm:py-12 gap-6">
            <div className="">
                <h1 className='xl:text-5xl sm:text-4xl flex py-3 sm:justify-center xl:justify-start font-extrabold'>Business Accounts</h1>
                <p className='font-extralight xl:w-[400px] sm:w-[92%] xl:mx-0 flex sm:mx-auto'>Whether you are just starting up or looking to grow your business,
                     we have the account that works just right for you</p>
                <button className='btn  flex w-52 sm:mx-auto xl:mx-0 mt-9 bg-navbarBg text-textc hover:bg-navbarBg hover:translate-x-5 duration-500'>
                  All Business accounts <IoChevronForwardOutline /> </button>
            </div>
            <div className="text-textc px-4">
            <div className="collapse collapse-arrow bg-navbarBg py-2 border-transparent rounded-tl-3xl rounded-br-3xl">
                 <input type="radio" name="my-accordion-2" defaultChecked />
                   <div className="collapse-title text-xl font-medium">Current Account</div>
                 <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Open a Current Account</a>
                </div>
                </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">3rdGB Business Account</div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Open a 3rdGB Business Account</a>
                     </div>
                   </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium">Domiciliary Account</div>
          <div className="collapse-content">
          <a href="#" className='hover:text-yellow-400 hover:duration-500'>Open a Domiciliary Account </a>
           </div>
           </div>
           <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium flex gap-1">Max Account </div>
                <div className="collapse-content">
              <a href="#" className='hover:text-yellow-400 hover:duration-500'>Open a Max account</a>
           </div>
           </div>
            </div>
            <div className="">
              <img src={img1} alt="" className='xl:w-[400px] h-[280px] sm:w-[85%] sm:mx-auto xl:mx-0 rounded-tl-3xl rounded-br-3xl object-center object-cover' />
              <h1 className='font-extrabold px-2 text-xl text-navbarBg py-4 xl:mx-0 sm:mx-auto xl:w-[400px] sm:w-[85%] '>Here for all
                 <span className='uppercase text-yellow-600 text-3xl ml-2'>Business</span> </h1>
            </div>
         </div>
      </div>
    </div>
    </div>
  )
}

export default BusAcc

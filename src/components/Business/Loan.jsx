import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import img1 from './../../assets/images/caro7.jpg'

const Loan = () => {
  return (
    <div>
         <div id='Loan' className='overflow-hidden'>
      <div className="bg-white rounded-tl-3xl rounded-br-3xl w-[100%] border-b border-black" > 
         <div className="flex xl:flex-row sm:flex-col justify-center py-6 gap-6">
            <div className="">
                <h1 className='xl:text-2xl sm:text-4xl flex py-3 sm:justify-center xl:justify-start font-extrabold'> Loans & Advance</h1>
                <p className='font-extralight xl:w-[400px] sm:w-[92%] xl:mx-0 flex sm:mx-auto'>
                Get the right financing for your business from our term loans and business facilities.
                </p>
                <button className='btn  flex w-52 sm:mx-auto xl:mx-0 mt-9 bg-navbarBg text-textc hover:bg-navbarBg hover:translate-x-5 duration-500'>
                  All Loans & Advance <IoChevronForwardOutline /> </button>
            </div>
            <div className="text-textc px-4">
            <div className="collapse collapse-arrow bg-navbarBg py-2 border-transparent rounded-tl-3xl rounded-br-3xl">
                 <input type="radio" name="my-accordion-2" defaultChecked />
                   <div className="collapse-title text-xl font-medium">Terms Loan</div>
                 <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Checkout Loans on your terms</a>
                </div>
                </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">SME Invoice Discount Finance</div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get your SME Financed </a>
                     </div>
                   </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium">Revolving Credit</div>
          <div className="collapse-content">
          <a href="#" className='hover:text-yellow-400 hover:duration-500'>
                        Revolving Credit </a>
           </div>
           </div>
           <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium flex gap-1">Overdraft </div>
                <div className="collapse-content">
              <a href="#" className='hover:text-yellow-400 hover:duration-500'>Overdraft</a>
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

export default Loan

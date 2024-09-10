import React,{useEffect} from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { BsMenuButton } from "react-icons/bs";
import img1 from "./../../assets/images/mc1.jpg"
const Account = () => {
  
  return (
    <div id='Account' className=''>
      <div className="bg-white rounded-tl-3xl rounded-br-3xl w-[100%] border-b border-black" > 
         <div className="flex xl:flex-row sm:flex-col justify-center py-6 gap-6">
            <div className="">
                <h1 className='xl:text-2xl sm:text-4xl flex py-3 sm:justify-center xl:justify-start
                font-extrabold'>Accounts</h1>
                <p className='font-extralight xl:w-[400px] sm:w-[92%] xl:mx-0 flex
                 sm:mx-auto'>Here are your best options for a rewarding banking experience.</p>
                <button className='btn  flex w-44 sm:mx-auto xl:mx-0 mt-9 bg-navbarBg text-textc
                hover:bg-navbarBg hover:translate-x-5 duration-500'>
                  See all Accounts <IoChevronForwardOutline /> </button>
            </div>
            <div className="text-textc px-4">
            <div className="collapse collapse-arrow bg-navbarBg py-2 border-transparent rounded-tl-3xl rounded-br-3xl">
                 <input type="radio" name="my-accordion-2" defaultChecked />
                   <div className="collapse-title text-xl font-medium">Savings & Investment Account</div>
                 <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Open a Savings Account</a>
                </div>
                </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Current Accounts</div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Open a Current Account</a>
                     </div>
                   </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium">Kiddies Account</div>
          <div className="collapse-content">
          <a href="#" className='hover:text-yellow-400 hover:duration-500'>Open a Kiddies Account</a>
           </div>
           </div>
           <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium">Business Account</div>
                <div className="collapse-content">
              <a href="#" className='hover:text-yellow-400 hover:duration-500'>Open a Business Account</a>
           </div>
           </div>
           <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium flex gap-1"> <BsMenuButton className='mt-[3px]' />Other Accounts</div>
                <div className="collapse-content">
              <a href="#" className='hover:text-yellow-400 hover:duration-500'>See Other Options</a>
           </div>
           </div>
            </div>
            <div className="">
              <img src={img1} alt="" className='xl:w-[400px] sm:w-[85%] sm:mx-auto xl:mx-0 rounded-tl-3xl rounded-br-3xl' />
              <h1 className='font-extrabold px-2 text-xl text-navbarBg py-4 '>Make the Best choice today with
                 <span className='uppercase text-yellow-600 text-3xl ml-2'>us</span> </h1>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Account

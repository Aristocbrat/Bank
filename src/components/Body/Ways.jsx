import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import way1 from "./../../assets/images/ways1.jpg"
import { MdMarkUnreadChatAlt } from "react-icons/md";

const Ways = () => {
  return (
    <div id='Ways'>
      <div className="bg-white w-[100%] border-b border-black  rounded-bl-3xl " >
        <div className="flex xl:flex-row sm:flex-col justify-center py-6 gap-6  mt-6">
            <div className="mt-1">
            <h1 className='xl:text-2xl sm:text-4xl flex sm:justify-center xl:justify-start py-3 font-extrabold'>Ways to bank</h1>
                <p className='font-extralight xl:w-[400px] sm:w-[92%] xl:mx-0 flex sm:mx-auto'>Bank anytime & everywhere with our e-channels .</p>
                <button className='btn flex  w-44 sm:mx-auto xl:mx-0 mt-9 bg-navbarBg text-textc hover:bg-navbarBg hover:translate-x-5 duration-500'>
                All ways to Bank <IoChevronForwardOutline /> </button>
            </div>
            <div className="text-textc px-4">
            <div className="collapse collapse-arrow bg-navbarBg py-2 border-transparent rounded-tl-3xl rounded-br-3xl">
                 <input type="radio" name="my-accordion-2" defaultChecked />
                   <div className="collapse-title text-xl font-medium">Bank *868#</div>
                 <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Dial *868# to start Banking</a>
                </div>
                </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Mobile Banking</div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Access Mobile Banking</a>
                     </div>
                   </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium">Internet Banking</div>
          <div className="collapse-content">
          <a href="#" className='hover:text-yellow-400 hover:duration-500'>Access Internet Banking</a>
           </div>
           </div>
           <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
                <input type="radio" name="my-accordion-2" />
             <div className="collapse-title text-xl font-medium">3rdGB buzzConnect</div>
                <div className="collapse-content">
              <a href="#" className='hover:text-yellow-400 hover:duration-500'>Access buzzConnect</a>
           </div>
           </div>
          
            </div>
            <div className=" ml-4 overflow-visible">
                <img src={way1} alt="" className='xl:w-[400px] sm:w-[85%] sm:mx-auto xl:mx-0 rounded-tl-3xl rounded-br-3xl'/>
                <div className="tooltip tooltip-top absolute xl:mt-[-5%] sm:mt-[-15%] ml-[25%] " data-tip = 'Talk 2 Us'>
                <MdMarkUnreadChatAlt  
                className='text-5xl text-yellow-600  cursor-pointer '/>
                </div>
                <p className='text-2xl font-extrabold mt-2 px-4 xl:ml-0 sm:ml-10 '>Ways to bank with 
                <span className='uppercase text-yellow-600 text-3xl ml-2'>us</span> </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Ways

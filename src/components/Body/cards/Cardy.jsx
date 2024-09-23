import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaNairaSign } from "react-icons/fa6";
import { FaRegHandPointRight } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import card from './../../../assets/images/cards.jpg'
const Cardy = () => {
  return (
    <div id='Cardy'>
      <div className="bg-white w-[100%] rounded-bl-3xl border-b border-black" >
         <div className="flex xl:flex-row sm:flex-col justify-center xl:py-24 sm:py-12 gap-6  mt-6">
          <div className="mt-1">
          <h1 className='xl:text-5xl sm:text-3xl py-3 font-extrabold flex sm:justify-center xl:justify-start'>Cards</h1>
                <p className='font-extralight xl:w-[400px] sm:w-[85%] xl:mx-0 flex sm:mx-auto'>Get more out of your money with our flexible, Super slick adding and easy-to-use cards. .</p>
                <button className='btn flex w-44 mx-auto mt-9 bg-navbarBg text-textc hover:bg-navbarBg hover:translate-x-5 duration-500'>
                See All Cards <IoChevronForwardOutline /> </button>
          </div>
          <div className="text-textc px-4">
            <div className="collapse collapse-arrow bg-navbarBg py-2 border-transparent rounded-tl-3xl rounded-br-3xl">
                 <input type="radio" name="my-accordion-2" defaultChecked />
                   <div className="collapse-title text-xl font-medium flex gap-4"><FaRegHandPointRight  className='mt-1'/>
                    <span className='flex '><FaNairaSign className='mt-[5px]' /> Naira Debit Card</span> </div>
                 <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get Your Naira Debit Card</a>
                </div>
                </div>
              <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium flex gap-4"><FaRegHandPointRight  className='mt-1'/>
                      <span className='flex '>
                    <BiDollar className='mt-[5px]' /> Dollar Debit Card</span></div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get your Dollar Debit Card</a>
                     </div>
                   </div>
                   <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium flex gap-4"><FaRegHandPointRight  className='mt-1'/>
                      <span className='flex '> Prepaid Cards</span></div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get Your Prepaid Card</a>
                     </div>
                   </div>
                   <div className="collapse collapse-arrow bg-navbarBg rounded-tl-3xl rounded-br-3xl mt-1">
               <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium flex gap-4"><FaRegHandPointRight  className='mt-1'/>
                      <span className='flex '> Compare Cards</span></div>
                  <div className="collapse-content">
                  <a href="#" className='hover:text-yellow-400 hover:duration-500'>Get Compare Cards </a>
                     </div>
                   </div>
            </div>

            <div className="">
            <img src={card} alt="" className='xl:w-[400px] sm:w-[85%] sm:mx-auto xl:mx-0 h-[300px] object-cover rounded-tl-3xl rounded-br-3xl' />
            <div className="absolute text-textc xl:mt-[-20%] sm:mt-[-67%] xl:ml-[13%] sm:ml-[44%] rotate-[16deg] font-extrabold border-2 border-white rounded-tl-3xl rounded-br-3xl">
              <h1 className='px-3'>3rdGb</h1>
              <p className='px-3'>Debit Card</p>
            </div>
            </div>
           
         </div>
      </div>
    </div>
  )
}

export default Cardy

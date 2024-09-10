import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import img1 from './../../assets/images/intr.jpg'
const Intrade = () => {
  return (
    <div>
      <div id="Intrade" className='flex xl:flex-row sm:flex-col justify-center py-6 gap-6
      bg-white rounded-tl-3xl rounded-br-3xl w-[100%] border-b border-black overflow-hidden'>
      <div className="">
            <h1 className='xl:text-2xl sm:text-4xl flex py-3 sm:justify-center xl:justify-start font-extrabold'>International Trade</h1>
            <p className='font-extralight xl:w-[400px] sm:w-[92%] xl:mx-0 flex sm:mx-auto'>
                At 3rdGB, we have the products and services to help you do business in the growing global trade market.</p>
            <button className='btn  flex w-64 sm:mx-auto xl:mx-0 mt-9 bg-navbarBg text-textc
             hover:bg-navbarBg hover:translate-x-5 duration-500'>
            International trade Services <IoChevronForwardOutline /> </button>
            </div>
        <div className="">
            <img src={img1} alt="" className='xl:w-[650px] sm:w-[87%] xl:h-[400px] sm:h-[250px] xl:mx-0 sm:mx-auto  object-fill ' />
        </div>
        </div> 
    </div>
  )
}

export default Intrade

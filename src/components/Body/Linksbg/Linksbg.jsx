import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Linksbg = () => {
  return (
    <div>
       <div className="bg-navbarBg">
         <section className='flex'>
            <div className="text-textc xl:px-5 sm:px-3 py-5">
                <h1 className='xl:w-[450px] xl:text-6xl uppercase ml-4 '>Link Your nin & bvn to keep your accout 
                    <span className='text-yellow-400 xl:ml-5 sm:ml-2 font-extrabold'>active</span></h1>
                    <div className=" mt-5 xl:ml-10 sm:ml-4 font-bold  ">
                    <a href="#" className='flex bg-yellow-300 w-[115px] rounded-tl-full  hover:translate-x-5 duration-500
                     text-navbarBg rounded-b-full px-3'>
                         Link Here <IoChevronForwardOutline className='mt-[5px]'/></a>
                    </div>
                </div>
                <div className="sm:hidden xl:block relative left-10">
                    <img src="/Group 101.png" alt=" " className='mt-9 dots' />
                </div>

                <div className=" xl:mt-40 sm:mt-44 ">
                <FaLightbulb  className='xl:text-9xl sm:text-4xl sm:ml-[-350%] xl:ml-0 text-yellow-400'/>
                </div>
                <div className="bg-yellow-500 xl:w-52 sm:w-64  h-52 mt-4 xl:ml-40 sm:mr-[8%] rounded-tl-3xl rounded-br-3xl text-[]">
                    <h1  className='xl:text-xl sm:text-[11px] font-extrabold
                     flex justify-center py-2 border-b border-navbarBg text-black'>Online Banking</h1>
                     <div className="flex xl:px-3 sm:px-1 justify-between xl:text-lg sm:text-[11px]">
                        <NavLink
                        to="/Person"
                        className={({ isActive }) =>
                            isActive 
                           ? "underline underline-offset-[12px] duration-500 text-yellow-500 "
                           : "hover:underline hover:underline-offset-[12px]  hover:duration-500 hover:text-black font-bold"
                          } >
                         Personal
                        </NavLink>

                        <NavLink
                        to="/Business"
                        className={({ isActive }) =>
                            isActive 
                           ? "underline underline-offset-[12px] duration-500 text-yellow-500"
                           : "hover:underline hover:underline-offset-[12px] text-navbarBg hover:duration-500 hover:text-black font-bold"
                          } >
                         Business
                        </NavLink>
                     </div>
                     <div className="mt-6 flex justify-center">
                        <button className='btn bg-navbarBg text-yellow-400
                         hover:bg-navbarBg hover:text-white duration-500'>Login</button>
                     </div>

                    <div className="flex xl:gap-4 sm:gap-2 justify-center xl:text-lg sm:text-[12px] mt-4">
                        <a href="#" className='border-r-2 border-navbarBg 
                        flex xl:px-3 sm:px-1 opacity-70 hover:opacity-100 text-black duration-500'>Register</a>
                        <a href="#" className='opacity-70 hover:opacity-100 text-black duration-500'>Demo</a>
                    </div>
                </div>
         </section>
         <img src="/Wave.png" alt="" className='h-[50px] w-[100%] ' />
       </div>
    </div>
  )
}

export default Linksbg

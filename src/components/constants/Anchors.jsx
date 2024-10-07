import React from 'react'
import { TbMoneybag } from "react-icons/tb";
import { IoCloudDownload } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { TbCreditCardPay } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";


const Anchors = () => {
  return (
    <div className='overflow-hidden bg-white'>
        <div className="flex flex-wrap xl:gap-12 sm:gap-[20px] sm:ml-3 xl:ml-0 anc  sm:px-2 
        py-5 xl:px-4 xl:w-[100%] sm:w-[95%] justify-center mt-4  ">
            <div className="xl:w-[100px] sm:w-[80px] opacity-85 group hover:opacity-100 duration-700 cursor-pointer">
            <TbMoneybag className='bg-navbarBg text-yellow-400 rounded-full text-4xl w-[50px] h-[50px] px-2 
            group-hover:bg-yellow-400 group-hover:text-navbarBg group-hover:duration-700 ' />
             <p className='font-extrabold xl:ml-[-16%] py-2 xl:text-lg sm:text-[10px]'>Investment</p>
            </div>
            <div className="xl:w-[100px] sm:w-[80px] opacity-85 group hover:opacity-100 duration-500 cursor-pointer">
            <FaUserTie className='bg-navbarBg text-yellow-400 rounded-full text-4xl w-[50px] h-[50px] px-2
            group-hover:bg-yellow-400 group-hover:text-navbarBg group-hover:duration-700'/>
            <p className='font-extrabold xl:ml-[-15%] py-2 xl:text-lg sm:text-[10px] '>Self service</p>
            </div>
            <div className="xl:w-[100px] sm:w-[80px] opacity-85 group hover:opacity-100 duration-500 cursor-pointer">
            <IoVideocam  className='bg-navbarBg text-yellow-400 rounded-full text-4xl w-[50px] h-[50px] px-2 
            group-hover:bg-yellow-400 group-hover:text-navbarBg group-hover:duration-700'/>
            <p className='font-extrabold w-[200px] xl:ml-[-26%] py-2  xl:text-lg sm:text-[10px]'> Video Banking</p>
            </div>
            <div className="xl:w-[100px] sm:w-[80px] opacity-85 group hover:opacity-100 duration-500 cursor-pointer">
            <FaPeopleGroup className='bg-navbarBg text-yellow-400 rounded-full text-4xl w-[50px] h-[50px] px-2
            group-hover:bg-yellow-400 group-hover:text-navbarBg group-hover:duration-700'/>
            <p className='font-extrabold py-2 xl:text-lg sm:text-[10px]'> Pension</p>
            </div>
            <div className="xl:w-[100px] sm:w-[80px]  opacity-85 group hover:opacity-100 duration-500 cursor-pointer">
            <IoLocationOutline className='bg-navbarBg text-yellow-400 rounded-full text-4xl w-[50px] h-[50px] px-2 
            group-hover:bg-yellow-400 group-hover:text-navbarBg group-hover:duration-700'/>
            <p className='font-extrabold w-[200px]  xl:ml-[-25%] py-2 xl:text-lg sm:text-[10px]'>Find a Branch</p>
            </div>
            <div className="xl:w-[100px] sm:w-[80px]  opacity-85 group hover:opacity-100 duration-500 cursor-pointer">
            <TbCreditCardPay className='bg-navbarBg text-yellow-400 rounded-full text-4xl w-[50px] h-[50px] px-2
            group-hover:bg-yellow-400 group-hover:text-navbarBg group-hover:duration-700'/>
            <p className='font-extrabold  xl:ml-[-16%] py-2 xl:text-lg sm:text-[10px]'>3rdGb pay</p>
            </div>
            <div className="xl:w-[100px] sm:w-[80px] opacity-85 group hover:opacity-100 duration-500 cursor-pointer">
            <RiCustomerService2Line className='bg-navbarBg text-yellow-400 rounded-full text-4xl w-[50px] h-[50px] px-2
            group-hover:bg-yellow-400 group-hover:text-navbarBg group-hover:duration-700'/>
               <p className='font-extrabold  xl:ml-[-16%] py-2 xl:text-lg sm:text-[10px]'>Help Centre</p>
            </div>
            <div className="xl:w-[100px] sm:w-[80px] opacity-85 group hover:opacity-100 duration-500 cursor-pointer">
            <IoCloudDownload className='bg-navbarBg text-yellow-400 rounded-full text-4xl w-[50px] h-[50px] px-2
            group-hover:bg-yellow-400 group-hover:text-navbarBg group-hover:duration-700'/>
               <p className='font-extrabold  xl:ml-[-16%] py-2 xl:text-lg sm:text-[10px]'>Downloads</p>
            </div>
        </div>
    </div>
  )
}

export default Anchors

import React from 'react'
import { FiSearch } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { FaArrowUp , FaArrowDown  } from "react-icons/fa";
const Investnews = () => {
  return (
    <div className='px-4 xl:ml-10 text-xl mt-4 py-5'>
        <h1 className='font-bold ml-8'>Latest News</h1>
      <div className="flex xl:flex-row sm:flex-col
       justify-between  xl:w-[95%] sm:w-[100%] mx-auto ">
        <section> 
            <div className="">
                <ul className='py-3 border-b-2 border-gray-500 group '>
                    <li  className='' >
                        <a href="" className='opacity-75 uppercase text-[14px]'> 12 sept 2024</a>
                        </li>
                    <li><a href="" className='text-[16px] group-hover:text-orange-500 duration-500'>3rdGB Named Best Bank for
                         Corporate Social Responsibility in Nigeria by Euromoney.</a></li>
                </ul>
                <ul className='py-3 border-b-2 border-gray-500 group'>
                    <li>
                        <a href="" className='opacity-75 uppercase text-[14px]'>9 sept 2024</a>
                        </li>
                    <li><a href="" className='text-[16px] group-hover:text-orange-500 duration-500'>3rdGB Plc Launches Public Offer to Raise N400.5Billion.</a></li>
                </ul>
                <ul className='py-3 border-b-2 border-gray-500 group'>
                    <li>
                        <a href="" className='opacity-75 uppercase text-[14px]'>6 sept 2024</a>
                        </li>
                    <li><a href="" className='text-[16px] group-hover:text-orange-500 duration-500'>3rdGB Notice of Proposed Offering.</a></li>
                </ul>
                <ul className='py-3 border-b-2 border-gray-500 group'>
                    <li>
                        <a href="" className='opacity-75 uppercase text-[14px]'>3 sept 2024</a>
                        </li>
                    <li><a href="" className='text-[16px] group-hover:text-orange-500 duration-500'>3rdGB 2024 Mid Year Investors Conference Call.</a></li>
                </ul>
            </div>

        </section>
        <section className="bg-[#F7F7F8] xl:w-[30%] text-black xl:py-1 sm:py-5 xl:mt-0 sm:mt-4">
            <div className="">
            <input type="Search" placeholder='search'
             className='w-full bg-slate-500 border-navbarBg  text-center text-[15px]' />
            </div>
             <div className="absolute xl:mt-[-1.6%] sm:mt-[-5.4%] ml-[1%] fisearch">
             <FiSearch />
             </div>
             <div className="rates border border-black relative xl:top-10 sm:top-2 w-[60%] h-[240px] mx-auto ">
                    <h1 className='font-bold text-[15px] mx-auto w-[70%]'>3rdGB Share Prices</h1>
                    <div className="flex justify-between w-[70%] mx-auto mt-4">
                        <div className="">
                        <img src="/nigeria.png" alt="" 
                        className='w-[40px]' />
                        <p>NSE</p>
                        <span className='flex text-[16px]'><TbCurrencyNaira   className='mt-[7px]'/> 45.00</span>
                        <span className='text-[11px] flex'>
                            <FaArrowDown className='text-red-600 mt-[7px]'/>-2.50%</span>
                        </div>
                        <div className="">
                        <img src="/uk.png" alt=""
                         className='w-[40px]' />
                         <p>LSE</p>
                         <span className='flex text-[16px]'><PiCurrencyDollarSimpleBold  className='mt-[7px]' /> 5.00</span>
                         <span className='text-[11px] flex'>
                            <FaArrowUp className='text-green-700 mt-[7px]' />+1.50%</span>
                        </div> 
                    </div>
                    <div className="flex text-[13px] w-[83%] mx-auto disclaimer ">
                        <p className='border-r border-black px-3 hover:font-bold hover:underline underline-offset-4 duration-300'>
                            <a href="#">Disclaimer</a></p>
                        <p className='px-3 hover:font-bold hover:underline underline-offset-4 duration-300'><a href="#">More Info</a></p>
                    </div>
                    <img src="/mylg.png" alt="" className='w-[50px] object-fill mx-auto mt-1'/>
             </div>
        </section>
      </div>
    </div>
  )
}

export default Investnews

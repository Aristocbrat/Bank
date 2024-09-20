import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import priv from './../../assets/images/private.jpg'

const Private = () => {
  return (
    <div id='Private' >
      <div className="bg-white w-[100%] rounded-br-3xl border-b border-black "  >
        <div className="flex xl:flex-row  sm:flex-col gap-6 justify-center py-6 mt-5">
        <div className="mt-1 flex justify-center flex-col">
            <h1 className='xl:text-2xl sm:text-4xl flex py-3 sm:justify-center xl:justify-start font-extrabold'>Private Banking</h1>
                <p className='font-extralight xl:w-[400px] sm:w-[85%] sm:mx-auto xl:mx-0'>Build on your achievements and follow your Dreams.</p>
                <p className='font-extralight xl:w-[400px] sm:w-[85%] sm:mx-auto xl:mx-0 '>With our innovative financial solutions designed just for you. </p>
                <button className='btn flex mt-9 bg-navbarBg w-44 sm:mx-auto xl:mx-0 text-textc hover:bg-navbarBg hover:translate-x-5 duration-500'>
                Private Banking <IoChevronForwardOutline /> </button>
                <div className="stats stats-vertical lg:stats-horizontal shadow xl:mx-0 sm:mx-auto mt-4 bg-white">
               <div className="stat">
                   <div className="stat-title">Investment</div>
                   <div className="stat-value">50% profit</div>
                      <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

             <div className="stat">
             <div className="stat-title">New Users</div>
               <div className="stat-value">4,200</div>
               <div className="stat-desc">↗︎ 400 (22%)</div>
             </div>

             <div className="stat">
               <div className="stat-title">New Registers</div>
               <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
           </div>
            </div>
            <div className="">
                <img src={priv} alt="" className='xl:w-[670px] sm:w-[90%] sm:mx-auto xl:mx-0 smrounded-r-full' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Private

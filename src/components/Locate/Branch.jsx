import React from 'react'
import { NavLink } from 'react-router-dom'

const Branch = () => {
  return (
    <div className='overflow-hidden w-full'>
       <div className="bg-[#F7F7F8] max-w-full h-[130px] px-3">
          <h1 className='text-5xl font-bold relative top-7 left-7'>Locate a Branch or Atm</h1>
       </div>
       <section >
          <div className="flex ">
            <div className="sect1 w-[70%] ml-[13%] mt-4">
                <div className="head flex">
                    <NavLink 
                    to="/Branch"
                    className={({isActive})=>{
                        isActive 
                    ? "underline underline-offset-[12px] duration-500 text-yellow-500 bg-[#F7F7F8]"
                    : "hover:underline hover:underline-offset-[12px] hover:duration-500 hover:text-yellow-500"
                    }}>
                       Branches
                    </NavLink>
                    <NavLink></NavLink>
                </div>

            </div>
            <div className="sect2"></div>
          </div>
       </section>
    </div>
  )
}

export default Branch

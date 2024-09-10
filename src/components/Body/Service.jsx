import React from 'react'
import Services from '../Ui/Services'
import Uidata from './../Data/Data1'

const Service = () => {
  return (
    <div className='w-[100%] rounded-br-3xl border-b border-black' id='Services'>
        <div className="">
        <h1 className='xl:text-3xl sm:text-xl font-extrabold py-4 flex justify-center'>Other Products & Services</h1>
      </div>
        <div className="bg-white flex xl:flex-row sm:flex-col gap-9 px-7 justify-center">
            {Uidata.map((item,index)=>{
                return(
                    <Services
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    ftext={item.ftext}
                    li1={item.li1}
                    li2={item.li2}
                    li3={item.li3}
                    li4={item.li4}
                    btext={item.btext}
                    btn={item.btn}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Service

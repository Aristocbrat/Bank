import React from 'react'
import Data4 from '../Data/Data4'
import Abc from './Abc'

const Abcd = () => {
  return (
    <div>
        <div className="w-[250px] ml-24 mt-8">
            <h1 className='text-2xl underline-offset-auto underline '>Learn More </h1>
        </div>
        <div className=" flex  xl:flex-row sm:flex-col justify-center">
       {Data4.map((item , index)=>{
        return(
            <Abc
           key={index}
           icon={item.icon}
           name={item.name}
           spann={item.spann}
           sc1={item.sc1}
           sc2={item.sc2}
           sc3={item.sc3}
           btn={item.btn} />
        )
      })}
      </div>
    </div>
  )
}

export default Abcd

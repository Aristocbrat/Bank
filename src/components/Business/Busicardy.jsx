import React from 'react'
import Buscard from '../Ui/Buscard'
import Data3 from '../Data/Data3'

const Busicardy = () => {
  return (
    <div className="">

    <div className='bg-white flex xl:flex-row sm:flex-col gap-9 px-7 justify-center '>
      {Data3.map((item , index)=>{
        return(
         <Buscard
         key={index}
         icon={item.icon}
         title={item.title}
         text={item.text}
         li1={item.li1}
         li2={item.li2}
         btext={item.btext}
         btn={item.btn}

         />
        )
      })
       }
    </div>
    </div>
  )
}

export default Busicardy

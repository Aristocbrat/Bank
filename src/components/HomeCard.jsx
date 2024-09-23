import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cardys from './Body/cards/Cardys'
import CardysData from './Data/Data2'
import Innovations from './Innovations';

const HomeCard = () => {


    
  return (
    <div className="">
        <div className="flex flex-col xl:py-4 sm:py-4 bg-white px-5 xl:ml-[24%] sm:ml-[6%]">
            <h1 className='xl:text-5xl sm:text-xl xl:w-[80%] sm:w-[100%] font-extrabold'>Innovative Banking Products</h1>
            <p className='xl:text-lg font-bold xl:w-[700px] sm:w-[95%] px-2 xl:ml-4 py-2'>Tailored to your lifestyle, designed for your
            personal and business needs.</p>
        </div>
    <div className='px-3 mt-7 xl:py-12 sm:py-4 flex justify-center xl:gap-24  sm:gap-8 bg-white flex-wrap'>
        {CardysData.map((item ,index)=>{
            return(
           <Cardys
           key={index}
           img={item.img}
           h1={item.h1}
           text={item.text}
           linkss={item.linkss}
           />
            )
        })}
       
    </div>
    <Innovations/>
    </div>
  )
}

export default HomeCard

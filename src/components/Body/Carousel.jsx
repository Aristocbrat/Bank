import React,{useState,useEffect} from 'react'
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs'
import { IoChevronForwardOutline } from "react-icons/io5";
import img1 from './../../assets/images/bulb.jpg'
import img2 from './../../assets/images/caro2.jpg'
import img3 from './../../assets/images/caro3.jpg'
import img4 from './../../assets/images/caro4.jpg'
import img5 from './../../assets/images/caro5.jpg'
import img6 from './../../assets/images/caro6.jpg'
import img7 from './../../assets/images/cas.jpg'

const Carousel = () => {
const  myImg = [img1,img2,img3,img4,img5,img6,img7];
const [currentIndex, setCurrentIndex] = useState(0);
const nextImage = () =>{
    const isLastSlide = currentIndex === myImg.length-1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
}
const prevImage = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? myImg.length - 1 : currentIndex - 1 
    setCurrentIndex(newIndex)
}
useEffect(() => {
    const interval = setInterval(nextImage, 9000);
    return () => clearInterval(interval);
}, [currentIndex]);

  return (
      <div>
        <div className='max-w-[100%] min-w-36 relative  mx-auto h-[450px] min-h-36 mt-5 group pb-5'>
        <div style={{backgroundImage:`url(${myImg[currentIndex]})`}} 
        className='w-full h-full rounded-[2px] bg-center bg-cover duration-500'></div>
      <div className='directions'>
      <div className="leftarrow">
           <BsChevronCompactLeft onClick={prevImage}   className='hidden group-hover:block absolute top-[50%] left-0 -translate-y-1/2 rounded-full  text-black bg-slate-500 cursor-pointer text-5xl '/>
        </div>
        <div className="rightarrow">
            <BsChevronCompactRight onClick={nextImage} className='hidden group-hover:block absolute top-[50%] right-0  sm:right-0 -translate-y-1/2  rounded-full  text-black bg-slate-500 cursor-pointer text-5xl'/>
        </div>
      </div>
      <div className="carotxt bg-[#F5F5F5] absolute top-[35%] py-4 px-4 xl:ml-20 rounded-tl-3xl rounded-br-3xl xl:w-[600px] sm:w-[280px] ">
           <h1 className='xl:text-2xl  font-bold px-3 opacity-75 py-2 '>Guiding you through life's choices and changes. </h1>
           <p className='xl:text-xl font-extrabold px-5 opacity-75'>Yesterday,Today & Tomorrow</p>
           <p className='xl:text-xl font-extrabold px-5 opacity-75'>We are by your side with help and guidance.</p>
           <button className='btn flex  mt-8 mx-auto bg-navbarBg hover:bg-navbarBg hover:translate-x-7 hover:duration-500 text-textc'>Show me how <IoChevronForwardOutline /></button>
      </div>
      
    </div>
    </div>
  )
}

export default Carousel

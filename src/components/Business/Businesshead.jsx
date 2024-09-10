import React from 'react'
import img1 from './../../assets/images/busbg.jpg'

const Businesshead = () => {
  return (
    <div className='pb-6 '>
      <div className="bg-busbg max-w-full h-[500px] bg-cover bg-center ">
      <div className="card bg-navbarBg text-yellow-400 xl:w-96 sm:w-[85%] relative top-44 xl:left-20 ">
       <div className="card-body ">
        <h2 className="card-title uppercase xl:text-3xl xl:w-[95%]  px-2">Simple Banking Solutions for your Business</h2>
       <p>Whatever your business or its size, we have what it takes to help you grow.</p>
        <div className="card-actions justify-start">
      <button className="btn bg-yellow-400 text-navbarBg w-36">Get Started</button>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Businesshead

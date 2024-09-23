import React from 'react'

const Abc = (props) => {
  return (
    <div>
        <div className=" w-[95%] mx-auto py-12 xl:px-4 sm:px-7">
            
           <div class="card-client bg-navbarBg xl:w-96 sm:w-[320px] py-[25px] px-[20px] border-2
            border-yellow-400 items-center text-yellow-300 
            transition-all duration-300 ease-in-out hover:-translate-y-2">
              <div class="user-picture border-4 rounded-full w-[5rem] h-[5rem]
               flex justify-center items-center m-auto border-yellow-400 text-5xl
                hover:text-orange-600 duration-500">
                {props.icon} </div>
               <p className="name-client font-bold text-xl uppercase flex justify-center  ">{props.name} </p>
               <span className='flex justify-center'>{props.spann} </span>
              <div className="social-media flex text-2xl justify-between mt-3 w-[80%] mx-auto ">
                <div className="tooltip tooltip-top"  data-tip="Instagram/@3rdGbolokun">
                <a href="">{props.sc1}</a>
                </div>
                <div className="tooltip tooltip-top" data-tip="X/@TechGenie_Us" >
                <a href="">< i className="ri-twitter-x-fill"></i></a>
                </div>
                <div className="tooltip tooltip-top" data-tip="Facebook" >
                <a href="">{props.sc3}</a>
                </div>
              </div>
              <div className=" flex justify-center mt-4">
                <button className='w-[140px] btn rounded-tl-3xl 
                rounded-br-3xl bg-yellow-400 border-yellow-400 border-2 text-navbarBg'>{props.btn}</button> 
              </div>
          </div>
        </div>
    </div>
  )
}

export default Abc

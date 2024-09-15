import React from 'react'

const Investcaro = (props) => {
   
  return (
    <div>
        <div className=" h-[190px] ">
        <div className="card bg-white shadow-box text-navbarBg w-64 h-[150px] group ">
         <div className="card-body items-center text-center">
            <div className="icons text-4xl group-hover:scale-150 duration-500">{props.icon}</div>
         <h2 className="card-title group-hover:text-orange-500 duration-500"><a href="">{props.title}</a></h2>
         
        
  </div>
</div>
        </div>
    </div>
  )
}

export default Investcaro

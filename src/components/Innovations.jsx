import React from 'react'

const Innovations = () => {
  return (
    <div>
      <div className="bg-navbarBg w-[100%] h-[100%]">
        <h1 className='flex justify-center xl:text-4xl
         text-yellow-400 pt-5 underline underline-offset-2'>You can be part of our Initiatives</h1>
        <img src="/Wave2.png" alt="" className='w-[100%]' />

        <div className="xl:absolute lg:absolute flex justify-center mt-[-38%] gap-6 px-2 ml-4 w-[94%] flex-wrap">
        <div className="card card-side bg-yellow-400 text-navbarBg shadow-xl xl:w-[500px] sm:w-[85%] flex xl:flex-row sm:flex-col">
        <figure>
           <img
      src="/save.jpg"
      alt="" className='xl:w-[350px] sm:w-[100%] h-[220px]'/>
     </figure>
         <div className="card-body sm:w-[100%] xl:w-[50%]">
         <h2 className="card-title flex text-xl  ">Save the <span className='text-green-700'>Green</span></h2>
          <p className='tex'>You can join our save the green initiative. Lets keep the planet green.</p>
          <a href="#" className='underline underline-offset-8 hover:text-green-800 duration-500 hover:font-extrabold'>#3rdGB-green</a>
          </div>
       </div>

        <div className="card card-side bg-yellow-400 text-navbarBg shadow-xl xl:w-[500px] sm:w-[85%] flex xl:flex-row sm:flex-col">
         <figure>
          <img
      src="/hc1.jpg"
      alt="" className='xl:w-[350px] sm:w-[100%] h-[220px]'/> 
          </figure>
       <div className="card-body">
    <h2 className="card-title">Pink Initiative</h2>
    <p>Join our our monthly match for the support for the Girl child. </p>
    <a href="#" className='underline underline-offset-8 hover:text-green-800 duration-500 hover:font-extrabold'>
        #Pink_Initiative</a>
  </div>
</div>

<div className="card card-side bg-yellow-400 text-navbarBg shadow-xl xl:w-[500px] sm:w-[85%] flex xl:flex-row sm:flex-col">
        <figure>
    <img
      src="/fash.jpg"
      alt="" className='xl:w-[350px] sm:w-[100%] h-[220px] '/>
     </figure>
         <div className="card-body">
    <h2 className="card-title"> 3rdGB Fashion week</h2>
    <p>We encourage creatives & we support them with our annual fashion show.</p>
    <a href="#" className='underline underline-offset-8 hover:text-green-800 duration-500 hover:font-extrabold'>#3rdGB-Fashionweek</a>
          </div>
       </div>

       <div className="card card-side bg-yellow-400 text-navbarBg shadow-xl xl:w-[500px] sm:w-[85%] flex xl:flex-row sm:flex-col">
        <figure>
          <img
             src="/build.jpg"
                 alt="" className='xl:w-[350px] sm:w-[100%] h-[200px]'/>
             </figure>
         <div className="card-body">
         <h2 className="card-title">3rdGB real Estates</h2>
         <p>You can check out our high rise buidings with a nice payment plan. </p>
         <a href="#" className='underline underline-offset-8 hover:text-green-800 duration-500 hover:font-extrabold'>#3rdRealEstate</a>
   
          </div>
       </div>
        </div>
      </div>
    </div>
  )
}

export default Innovations

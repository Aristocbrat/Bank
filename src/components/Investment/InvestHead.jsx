import React from 'react'
import InvestCard from './InvesrtCard'

const InvestHead = () => {
  return (
    <div>
       <div className="bg-[#F7F7F8] max-w-full h-[550px] object-contain opacity-85 ">
        <img src="/caro6.jpg" alt="" className='xl:w-[75%] sm:w-[100%] mx-auto xl:h-[480px] sm:h-[250px] relative top-5 '/>
        <div className="card innvc bg-inherit text-navbarBg xl:w-[400px] sm:w-[370px]
         absolute xl:top-[54%] sm:top-[72%] xl:left-[15%] sm:left-[3%]">
           <div className="card-body items-center text-center">
         <h2 className="card-title xl:text-4xl sm:text-3xl">Investor Relations</h2>
         <p className='text-orange-700 text-xl'>Beautiful Investments</p>
        <p>We bank the people and companies driving investment,
         trade and the creation of wealth
          across West and East Africa as well as the UK.</p>
      </div>
     </div>
       </div>
       <section>
        <div className="mt-2">
            <InvestCard/>
        </div>
     </section>

    </div>
  )
}

export default InvestHead

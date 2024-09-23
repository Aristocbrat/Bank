import React from 'react'

const Aboutarticle = () => {
  return (
    <div>
       <div className="main text-navbarBg bg-[#F7F7F8] xl:py-16 sm:py-12">
        <h1 className='font-bold xl:text-7xl sm:text-4xl flex justify-center underline underline-offset-8 '>About us</h1>
        <div className=" max-w-[85%] mx-auto py-6">
            <h1 className='font-bold xl:text-4xl sm:text-2xl underline underline-offset-8 py-3'>
                3rdGB Bank: Revolutionizing Banking in West Africa</h1>
             <p className='text-xl py-2'>
             In today's fast-paced world, financial institutions must deliver more
              than just traditional banking services. 3rdGB Bank stands at the forefront
              of this transformation, reshaping the banking experience across West Africa.
             With a strong presence in major cities throughout the region,
              3rdGB Bank offers innovative solutions tailored to meet the needs 
              of individuals and businesses alike.
             </p>
             <h1 className='font-bold xl:text-4xl sm:text-2xl underline underline-offset-8 py-3' >
                3rdGB Bank's Presence Across West Africa</h1>
        </div>
        <p className='text-xl w-[85%] mx-auto'>
        3rdGB Bank is strategically located in key West African cities to ensure
         accessibility and seamless service delivery to its growing customer base.
          Whether you reside in bustling economic hubs or smaller towns,
           you can find a 3rdGB Bank branch or ATM near you. Our physical 
           locations are complemented by an expansive digital banking network,
            making it easy for customers to bank on the go.
        </p>
        <ul className='w-[85%] mx-auto mt-4'>
            <li><p className='text-xl font-bold py-3'>Here are some of the key cities where 3rdGB Bank operates:</p></li>
            <li ><span className='font-extrabold text-xl'>Lagos, Nigeria:</span> As Africa's largest city and economic powerhouse,
                 Lagos is home to several 3rdGB branches, catering to personal,
                  business, and corporate banking needs.</li>
            <li className='py-3'><span className='font-extrabold text-xl'>Accra, Ghana:</span>  A vital financial center, 
            3rdGB's Accra branches serve individuals and companies 
            looking for advanced banking solutions.</li>
            <li className='py-3'><span className='font-extrabold text-xl'>Abidjan, Ivory Coast:</span> 
             Our branches in Abidjan offer seamless banking to residents 
            and businesses in this dynamic West African city.</li>
            <li className='py-3'><span className='font-extrabold text-xl'>Dakar, Senegal:</span>
            3rdGB's presence in Dakar ensures that locals and expatriates
             alike can enjoy efficient banking services, whether for personal savings or business growth.
            </li>
            <li className='py-2'><span className='font-extrabold text-xl'> Bamako, Mali:</span>
            In Bamako, our team focuses on empowering local entrepreneurs and individuals with financial tools that foster growth.
            </li>
        </ul>
        
        
       </div>
    </div>
  )
}

export default Aboutarticle

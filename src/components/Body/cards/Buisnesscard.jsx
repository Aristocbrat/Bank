const Buisnesscard = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
      <div className='flex xl:gap-9 bg-yellow-400 xl:h-[20px] sm:h-[35px]
       px-4 justify-center sticky top-0 z-30 w-full rounded-tl-3xl rounded-br-3xl'>

         <div className="card w-44 mt-2 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#BusAcc"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('BusAcc');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%] 
                sm:mt-[-63%] font-extrabold bacc"
            > Business
              Accounts
            </a>
          </div>
        </div>
      </div>

      <div className="card w-44 mt-2 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Copcard"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Copcard');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%]
                sm:mt-[-63%] font-extrabold cop"
            >
              Corporate cards
            </a>
          </div>
        </div>
      </div>

      <div className="card w-44 h-full mt-2">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Loan"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Loan');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%] 
               sm:mt-[-63%] font-extrabold loan"
            >
              Loans & Advance
            </a>
          </div>
        </div>
      </div>


      <div className="card w-44 mt-2 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Busservice"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Busservice');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%]
              sm:mt-[-63%] font-extrabold bus"
            >
              Business Services
            </a>
          </div>
        </div>
      </div>

      <div className="card w-44 mt-2 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Intrade"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Intrade');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%]
              sm:mt-[-63%] font-extrabold int"
            >
              International Trade
            </a>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Buisnesscard
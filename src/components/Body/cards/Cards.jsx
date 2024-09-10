import React from 'react';

const Cards = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex xl:gap-9 bg-yellow-400 xl:mt-[-1.5%] sm:mt-[-3%] 
     xl:h-[20px] sm:h-[35px]  px-4 justify-center sticky top-0 z-30 w-full rounded-tl-3xl rounded-br-3xl'>
  
      <div className="card w-36 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Account"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Account');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%] 
              sm:mt-[-40%] font-extrabold"
            >
              Accounts
            </a>
          </div>
        </div>
      </div>

      <div className="card w-36 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Ways"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Ways');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%] sm:mt-[-59%] font-extrabold"
            >
              Ways to bank
            </a>
          </div>
        </div>
      </div>

      <div className="card w-36 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Private"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Private');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%] 
              sm:mt-[-55%] font-extrabold"
            >
              Private Banking
            </a>
          </div>
        </div>
      </div>


      <div className="card w-36 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Cardy"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Cardy');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%]
              sm:mt-[-40%] font-extrabold"
            >
              Cards
            </a>
          </div>
        </div>
      </div>

      <div className="card w-36 h-full">
        <div className="card-body px-3">
          <div className="card-actions justify-center">
            <a
              href="#Services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Services');
              }}
              className=" text-navbarBg xl:text-[15px] sm:text-[8px] hover:text-black hover:duration-500 xl:mt-[-27%]
              sm:mt-[-40%] font-extrabold"
            >
              Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

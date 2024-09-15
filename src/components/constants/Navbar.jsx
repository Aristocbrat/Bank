import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoChevronDown, IoChevronForwardOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GiPadlock } from "react-icons/gi";
import logoimg from "./../../assets/images/mylg.png";
import { BsMenuButton } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { TiLightbulb } from "react-icons/ti";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="notice w-full h-32 py-3 xl:px-9 sm:px-4 border-b-2 border-navbarBg bg-[#e6fffb]">
          <h3 className="text-navbarBg font-extrabold ml-6 text-xl">Important Notice:</h3>
          <p className="xl:w-[70%] xl:font-light sm:font-extrabold text-lg xl:ml-6 sm:w-[100%] xl:text-lg sm:text-[11px]">
            Please be mindful of fake sites by fraudulent parties posing as 3rdGb Bank Ltd. 
            Do not disclose your personal information and financial details to anyone online or anywhere.
          </p>
        </div>
        
        <div className="bg-navbarBg w-full h-16 text-textc xl:clip-p overflow-visible flex">
          <ul className="xl:flex sm:hidden py-4 gap-8 px-5 relative z-20">
            <li>
              <img src={logoimg} alt="Logo" className='rounded-tl-3xl rounded-br-3xl text-navbarBg w-[80px] h-[35px] object-contain'/>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive 
                    ? "underline underline-offset-[12px] duration-500 text-yellow-500"
                    : "hover:underline hover:underline-offset-[12px] hover:duration-500 hover:text-yellow-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Person"
                className={({ isActive }) =>
                  isActive 
                    ? "underline underline-offset-[12px] duration-500 text-yellow-500"
                    : "hover:underline hover:underline-offset-[12px] hover:duration-500 hover:text-yellow-500"
                }
              >
                Personal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Business"
                className={({ isActive }) =>
                  isActive 
                    ? "underline underline-offset-[12px] duration-500 text-yellow-500"
                    : "hover:underline hover:underline-offset-[12px] hover:duration-500 hover:text-yellow-500"
                }
              >
                Business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Aboutus"
                className={({ isActive }) =>
                  isActive 
                    ? "underline underline-offset-[12px] duration-500 text-yellow-500"
                    : "hover:underline hover:underline-offset-[12px] hover:duration-500 hover:text-yellow-500"
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Invest"
                className={({ isActive }) =>
                  isActive 
                    ? "underline underline-offset-[12px] duration-500 text-yellow-500"
                    : "hover:underline hover:underline-offset-[12px] hover:duration-500 hover:text-yellow-500"
                }
              >
                Investor Relations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                aria-label="Search"
                className={({ isActive }) =>
                  isActive 
                    ? "text-yellow-500"
                    : "hover:text-yellow-500"
                }
              >
                <CiSearch className="text-2xl" />
              </NavLink>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-[12px] hover:duration-500 hover:text-yellow-500 flex gap-[6px]">
                <GiPadlock className='mt-[6px]' /> Online Banking Login
              </a>
            </li>
          </ul>
          <div className="xl:hidden  text-[12px]">
                <ul className="flex gap-5 items-center mt-2 px-4">
                     <li
                      className='bg-yellow-400 rounded-full w-11 h-9 hover:translate-y-2 duration-300 '>
                        <p onClick={()=>document.getElementById('my_modal_5').showModal()}>
                          <BsMenuButton className='mt-[5px] text-navbarBg ml-2   text-2xl' />
                          </p>
                          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-52">
                      <div className="modal-box bg-navbarBg text-yellow-400">
                         <ul>
                          <li className='border-b-2 py-2 border-yellow-400' >
                            <a href="/"> Home</a>
                            </li>
                          <li className='border-b-2 py-2 border-yellow-400'>
                            <a href="/Person">Personal</a>
                            </li>
                          <li className='border-b-2 py-2 border-yellow-400'>
                            <a href="/Business">Business</a></li>
                          <li className='border-b-2 py-2 border-yellow-400'>
                            <a href="/Invest">Investor Relations</a></li>
                            <li className='border-b-2 py-2 border-yellow-400'>
                            <a href="#" className='flex gap-2'>
                              <GiPadlock className='mt-[4px]' /> Online Banking Login</a></li>
                         </ul>
                   <div className="modal-action">
                       <form method="dialog">
                      
                       <button className="text-3xl "><GiCancel /></button>
                         </form>
                        </div>
                    </div>
                  </dialog>
                      </li>
                     <li><button className="btn bg-yellow-400 text-navbarBg flex"> <GiPadlock className='mt-[6px]' />Login</button></li>
                     <li><CiSearch className="text-2xl text-yellow-500" /></li>
                     <li>
                   <img src={logoimg} alt="Logo" className='rounded-tl-3xl rounded-br-3xl
                   text-navbarBg w-[80px] h-[35px] object-contain mt-1 ml-14'/>
                  </li>
                </ul>
          </div>
          
        </div>

        <section className='xl:w-[45%] sm:w-[100%] bg-white border-b-2 border-r-2 border-navbarBg rounded-br-lg'>
          <ul className='flex xl:gap-10 sm:gap-5 xl:ml-12 py-2 sm:text-[13px] px-3'>
            <li className="dropdown dropdown-hover relative">
              <a tabIndex={0} href="#" className="hover:underline hover:underline-offset-[6px] hover:duration-500 hover:text-yellow-500">
                Open an Account
              </a>
              <ul className="dropdown-content w-32 z-50 menu bg-navbarBg rounded-tl-3xl 
              rounded-br-3xl mt-2 shadow absolute left-0 top-full border-yellow-400 border-2">
                <li className="dropdown dropdown-right dropdown-end relative">
                  <a tabIndex={0} href="#" className="text-white hover:duration-500 hover:text-yellow-500">
                    Savings <IoChevronForwardOutline />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:duration-500 hover:text-yellow-500">
                    Current <IoChevronForwardOutline />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:duration-500 hover:text-yellow-500">
                    Business <IoChevronForwardOutline />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:duration-500 hover:text-yellow-500">
                    Kiddies <IoChevronForwardOutline />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:duration-500 hover:text-yellow-500">
                    Zero <IoChevronForwardOutline />
                  </a>
                </li>
              </ul>
            </li>
            
            <li className="dropdown dropdown-hover relative group hover:duration-500 hover:text-yellow-500">
              <a href="#" tabIndex={0} className="flex ml-4 gap-1 " aria-label="Locate">
                Locate <span><IoChevronDown className="xl:mt-[3px] sm:mt-[4px] group-hover:rotate-180 duration-500" /></span>
              </a>
              <ul className="dropdown-content w-24 z-50 menu bg-navbarBg rounded-tl-3xl rounded-br-3xl 
              mt-2 shadow absolute left-0 top-full text-textc border-yellow-400 border-2">
                <li><a href="#" className='hover:duration-500 hover:text-yellow-500'>Branch</a></li>
                <li><a href="#" className='hover:duration-500 hover:text-yellow-500'>ATM</a></li>
              </ul>
            </li>

            <li><a href="#" className='hover:duration-500 hover:text-yellow-500'>Media</a></li>
            <li><a href="#" className='hover:duration-500 hover:text-yellow-500'>Security</a></li>
            <li>
              <a href="#" className='hover:underline hover:underline-offset-[8px] hover:duration-500 hover:text-yellow-500'>
                Help
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;

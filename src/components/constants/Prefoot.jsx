import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsChatQuote } from "react-icons/bs";

const Prefoot = () => {
  return (
    <div className='bg-navbarBg'>
    <footer className="footer xl:flex sm:hidden flex-wrap  text-yellow-400 justify-center xl:gap-20 
     xl:p-10 sm:p-5 sm:gap-12  mt-8 border-b-2 border-yellow-400 w-[100%]">
    <nav>
    <h6 className="footer-title">Personal</h6>
    <a className="link link-hover">Savings Account</a>
    <a className="link link-hover">Current Account</a>
    <a href='/Cardy' className="link link-hover">Cards</a>
    <a className="link link-hover">Compare Accounts</a>
    <a className="link link-hover">Loans</a>
    <a className="link link-hover">Private Banking</a>
  </nav>
    <nav>
    <h6 className="footer-title">About us</h6>
    <a className="link link-hover">Our Company</a>
    <a className="link link-hover">Investors relations</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">3rdGB pay</a>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Find a Branch/ATM</a>
    <a className="link link-hover">BVN Linkage</a>
    <a className="link link-hover">Upgrade Account</a>
    <a className="link link-hover">Video Banking</a>
    <a className="link link-hover">3rdGB-Refer</a>
    <a className="link link-hover">Open an Account</a>
  </nav>
  <nav>
    <h6 className="footer-title">Help & Security</h6>
    <a className="link link-hover">Password Reset</a>
    <a className="link link-hover">Reactivation</a>
    <a className="link link-hover">Self service</a>
    <a className="link link-hover">Complaints & Enquiries</a>
    <a className="link link-hover">Whistle Blower</a>
    <a className="link link-hover">Customer Feedback</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">Business</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        
<div className="connect py-5 border-b border-yellow-400 text-yellow-400 flex  flex-wrap items-center justify-center">
<BsFillTelephoneFill className='xl:text-4xl xl:block sm:hidden' />
<div className="connecttext uppercase flex flex-wrap gap-6 sm:mx-auto justify-center sm:w-[75%] xl:w-[100%]">
    <h1 className='xl:text-2xl'>3rdGBConnect:</h1>
    <ul className='flex flex-wrap xl:gap-4 sm:gap-1 mt-1'>
        <li>+234-8020921564</li>
        <li>+234-8056113268</li>
        <li>+234-9096005136</li>
        <li>+234-8080512928</li>
        <li>+234-9053267542</li>
    </ul>
    <div className="tooltip tooltip-top" data-tip="Your Message">
    <button className=" bg-yellow-400 rounded-tl-full rounded-b-full" onClick={()=>document.getElementById('my_modal_3').showModal()}>
    <BsChatQuote className='text-navbarBg text-4xl px-2'/></button>
      <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
     <form method="dialog">

     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
     </form>
       <h3 className="font-bold text-lg text-black">Hello! Customer</h3>
       <form action="" className='flex xl:flex-row sm:flex-col gap-1 py-3 '>
    <input type="text" id='name' className='border-black border-2 rounded-full px-3 text-black bg-transparent'/>
      <label htmlFor="name" className='absolute xl:left-[10%] opacity-20 text-[13px] mt-1 text-black px-3' >
         Name
    </label>
    <input type="email" id='email'  className='border-black border-2 rounded-full px-3 text-black bg-transparent '/>
    <label htmlFor="email" className='absolute xl:left-[53%] opacity-20 text-[13px] xl:mt-1 sm:mt-9 text-black px-3'>
        Email
    </label>
 </form>

   <p className="py-4">
        <textarea className="textarea textarea-bordered border-black  text-black" placeholder="Your Message " ></textarea>
        <button type='submit' className='btn bg-navbarBg text-yellow-500 xl:ml-10'>Share Conversation</button>
   </p>
  </div>
    </dialog>
  </div>
 </div>
 </div>
    </div>
  )
}

export default Prefoot

import React, { Component } from 'react'
import {BiLogoInvision} from "react-icons/bi";

const Navbar = () => {
   let links = [
    {name:"Home", link:"/"},
   ]
  return (
  <div className='shadow-md w-full fixed top-0 left-0'>
  
   <nav>
    <a>
   < BiLogoInvision className='text-white font-bold  text-7xl cursor-pointer mr-1 pt-2'/>
    </a>
    <div className='md:flex items-center font-bold justify-between py-4 px-7 md:px-10   '>

        <ul className=' md:flex md:items-center md:pb-0 pb-12 absolute md:static'>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
       </ul>
    </div>

    
    <button className='text-white'>
        Get Started
       </button>
       
   </nav>
   </div>
  
  )
}

 export default Navbar;
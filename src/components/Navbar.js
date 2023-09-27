import React, { Component, useState } from 'react'
import Button from './Button';
import { BiMenu} from "react-icons/bi";

const Navbar = () => {
   let Links = [
    {name:"HOME", link:"/"},
    {name:"SERVICE", link:"/"},
    {name:"ABOUT", link:"/"},
    {name:"BLOG'S", link:"/"},
    {name:"CONTACT", link:"/"},
   ];

   let [open,setOpen]= useState(false);
   
  return (
  <div className='shadow-md w-full fixed top-0 left-0'>
  <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
 
  
    < span className='text-pink-800 hover:text-pink-400 font-bold text-4xl  cursor-pointer mr-1 pt-2'> 
        Designer
        </span>

<div  
onClick={() => setOpen(!open)}
className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
<BiMenu name={open ? 'close' : 'menu'}/>

</div>

        <ul className={`md:flex md:items-center bg-pink-800 md:z-auto z-[1] left-0 w-full md:w-auto md:pb-0 pb-12 absolute md:static md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20': 'top-[-490px]'} md:opacity-100 opacity-0` }>
      {
        Links.map((link)=> (
<li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
    <a href={link.link} className='text-white hover:text-pink-400 font-bold'>{link.name}</a>
</li>
        ) )
      }
       </ul>
   

    <Button 
   
    className='text-white'>
        Get Started
       </Button>
       
    
   </div>
   </div>
  
  )
}

 export default Navbar;
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
  //  state = {clicked: false};
  //  handleClick = () => {
  //   this.setState({ clicked:
  //     !this.state.clicked } )
  //  }
   
  return (
  <div className='shadow-md w-full fixed top-0 left-0'>
  <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
 
  
    < span className='text-cyan-800 hover:text-cyan-400 font-bold text-4xl  cursor-pointer mr-1 pt-2'> 
        Designer
        </span>


{/* <div id='mobile ' className='text-cyan-800 justify-center'
onClick={this.handleClick}>
  <i id='bar'
className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
  </i>
</div> */}









 <div  
onClick={() => setOpen(!open)}
 className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden  '>  
 <BiMenu className='text-cyan-400' />
</div>

         <ul className={`md:flex md:items-center bg-cyan-200 md:z-auto z-[1] left-0 w-full md:w-auto md:pb-0 pb-12 absolute md:static md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20': 'top-[-490px]'} md:opacity-100 opacity-0` }> 
      {
        Links.map((link)=> (
<li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
    <a  href={link.link} className='text-cyan-800 hover:text-cyan-400 font-bold'>{link.name}</a>
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
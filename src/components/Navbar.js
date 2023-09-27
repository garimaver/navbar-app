import React, { Component } from 'react'
import {BiLogoInvision} from "react-icons/bi";

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState()
    }
    render () {
  return (
   <>
   <nav>
    <a>
   < BiLogoInvision className='text-white  m-10 text-7xl'/>
    </a>
    <div>
        <ul id='navbar'>
            <li className='flex  text-white text-3xl font-bold justify-center '><a className='active' href='index.html'>Home</a></li>
            <li className='flex  text-white text-3xl font-bold justify-center'><a href='index.html'>Shop</a></li>
            <li className='flex  text-white text-3xl font-bold justify-center'><a href='index.html'>Blog</a></li>
            <li className='flex  text-white text-3xl font-bold justify-center'><a href='index.html'>About</a></li>
            <li className='flex  text-white text-3xl font-bold justify-center'><a href='index.html'>Contact</a></li>
        </ul>
    </div>

    <div id='mobile'>
        <i id="bar" className= {this.state.clicked ? 'fas fa-time' : 'fas fa-bars text-white'}       ></i>
        
    </div>
   </nav>
   
   </>
  )
}
}
 export default Navbar;
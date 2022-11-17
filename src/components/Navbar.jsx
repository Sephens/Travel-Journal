import React from 'react'
import './styles/my.css'
import Logo from '../assets/logo.png'

import {FcPhone} from 'react-icons/fc'
import {HiOutlineMail} from 'react-icons/hi'
import {IoLogoWhatsapp} from 'react-icons/io'

function Navbar() {
  return (
    <nav className='nav-bar'>

    <div className='nav-left'>
      <img src={Logo} id='logo-img'/>
      <h1 id='nav-title'>Travel with Steve</h1>
    </div>

    <div className='nav-right'>
        <FcPhone className='icons' id='phone'/>
        <HiOutlineMail className='icons' id='email'/>
        <IoLogoWhatsapp className='icons' id='wapp'/>

    </div>

    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import {  FaClinicMedical, FaStethoscope, FaUserAlt } from 'react-icons/fa'
import logo from '../assets/lg.png'

const Navbar = () => {
  return (
    <div className='nav  navbar nav-bar container navbar-expand-lg navbar-light bg-light'>
      <div className='logo'>
        <img src={logo}  alt='logo'/>
      </div>
     <nav>
        <ul>
            <li>
            <FaClinicMedical size={24}/> <Link to="/"> Home</Link>
            </li>
            <li>
             <FaStethoscope/> <Link to='/doctors'>All doctors</Link>
            </li>
            <li>
            <FaUserAlt size={24}/>  <Link to="/about"> About</Link>
            </li>
           
        </ul>
     </nav>
    </div>
  )
}

export default Navbar

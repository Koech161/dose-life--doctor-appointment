import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/Navbar.css'
import {  FaClinicMedical,  FaHospitalUser, FaStethoscope,} from 'react-icons/fa'
import logo from '../assets/lg.png'

const Navbar = () => {
const navigate = useNavigate()

const handleLogin = () =>{
  navigate('/login')
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label='breadcrumb'>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ height: '40px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link className="nav-link " to="/">
                <FaClinicMedical size={24} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">
                <FaStethoscope size={24} /> All Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <FaHospitalUser size={24} /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link className='navbar-brand' to='/'>
        <button className='btn badge rounded-pill text-light btn-light bg-primary btn-secondary' onClick={handleLogin}>Create account</button>
      </Link>
    </nav>
  );
 
}

export default Navbar

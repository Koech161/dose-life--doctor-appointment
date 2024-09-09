import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import {  FaClinicMedical,  FaHospitalUser, FaStethoscope,} from 'react-icons/fa'
import logo from '../assets/lg.png'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ height: '40px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
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
    </nav>
  );
 
}

export default Navbar

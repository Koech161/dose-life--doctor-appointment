import React from 'react'
import logo from '../assets/lg.png'
import '../style/Navbar.css'
const Footer = () => {
  return (
    <footer className='container py-5'>
    <div className='row'>
      <div className='footer-logo col-md-4 mb-4'>
            <img className='img-fluid mb-3' src={logo} alt='logo'/>
           <p>Welcome to Doselife, your trusted partner in managing your healthcare <br></br>
           needs conveniently and efficiently. At Doselife, we understand the challenges <br></br>
           individuals face when it comes to scheduling doctor appointments and managing <br></br>their health records.</p>
      </div>
        <div className='col-md-4 mb-4'>
            <h1 className='lead fw-bold'>COMPANY</h1>
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy policy</p>
            
        </div>
        <div className='col-md-3  '>
            <h1>GET IN TOUCH</h1>
            <p>+0-000-012-344</p>
            <p>doselife0@gmail.com</p>
        </div>
    </div>
    <div className='text-center'>
            <p >&copy; Doselife.2024. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer

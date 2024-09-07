import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='about'>
        <h1>ABOUT US</h1>
        <div className='continer'>
            <img src={assets.about_image} alt='about'/>
            <p>Welcome to Doselife, your trusted partner in managing your healthcare needs conveniently and efficiently. At Doselife, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.<br></br>

Doselife is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Doselife is here to support you every step of the way.</p>
        </div>
      
    </div>
  )
}

export default About

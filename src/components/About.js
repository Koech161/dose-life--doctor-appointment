import React from 'react'
import { assets } from '../assets/assets'
import '../style/About.css'

const About = () => {
  return (
    <div className='container my-5'>
    <h1 className='text-center mb-4 fw-bold'>About Us</h1>
    <div className='row align-items-center'>
        <div className='col-md-6 mb-4'>
            <img className='img-fluid rounded shadow-sm' src={assets.about_image} alt='about' />
        </div>
        <div className='col-md-6'>
            <p className='lead'>
                Welcome to Doselife, your trusted partner in managing your healthcare needs conveniently and efficiently. At Doselife, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            </p>
            <p className='lead'>
                Doselife is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Doselife is here to support you every step of the way.
            </p>

            <p className='fw-bold mt-4 text-center'>Our vision</p>
    <p>
    Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
    </div>
    <h4 className='text-center my-4 fw-bold'>Why Choose Us</h4>
        <div className='row'>
            <div className='col-md-4 mb-4'>
                <div className='card p-3 shadow-sm card-outline-primary hover-bg-primary'>
                    <h5 className='card-title fw-bold'>Efficiency</h5>
                    <p className='card-text'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
            </div>
            <div className='col-md-4 mb-4'>
                <div className='card p-3 shadow-sm hover-bg-primary'>
                    <h5 className='card-title fw-bold'>Convenience</h5>
                    <p className='card-text'>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
            </div>
            <div className='col-md-4 mb-4 '>
                <div className='card p-3 shadow-sm hover-bg-primary' >
                    <h5 className='card-title fw-bold'>Personalization</h5>
                    <p className='card-text'>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>
        </div>
</div>
  )
}

export default About

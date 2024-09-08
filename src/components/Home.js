import React from 'react'
import { assets, doctors, specialityData } from '../assets/assets'
import '../style/Home.css'

const newLocal =<p className='text-success'><span className='dot'>.</span>  Available</p>
const Home = () => {
  return (
    <div className='home'>
      
        <div className='home-container container'>
            <div className='home-card card bg-primary text-white '>
              <div className='head-content'>
                <h3 className='text-white fw-bolder'>Book Appointment <br></br>
                With Trusted Doctors</h3>
            <img className='group-img' src={assets.group_profiles}   alt='group-profiles'/> 
            <p>Simply browse through our extensive list of trusted doctors,<br></br>
            schedule your appointment hassle-free.</p>
            <button className='btn btn-light' >Book appointment   <img src={assets.arrow_icon} alt='arrow'/> </button>
            </div>
            <img className='header-img ' src={assets.header_img} alt='header'/>
            </div>
            <div className='speciality'>
               <h3>Find by Speciality
               </h3>
               <p>Simply browse through our<br></br> extensive list
                 of trusted doctors,<br></br> schedule your appointment<br></br> hassle-free.</p>

                 </div>
                 <div className='special'>
                {specialityData.map((spec,index)=>(
                  <div className='spec-img' key={index}>
                   <figure>
                   <img src={spec.image} alt={spec.speciality}/>
                   <figcaption>{spec.speciality}</figcaption>
                   </figure>
                    </div>
                ))}
                </div>

                <div className='doctors'>
                  <h2>Top Doctors to Book</h2>
                  <p>Simply browse through our <br></br>extensive list of trusted<br></br> doctors.</p>
                  <div className='doc-cards container'>
                  {doctors.slice(0,8).map((doc)=>(
                    <div className='doctor-card card card-hover-effect style="width: 18rem;' key={doc._id}>
                      <img className='doc-img card-img mb-3' src={doc.image} alt={doc.name}/>
                      {newLocal}
                      <h3>{doc.name}</h3>
                      <p>{doc.speciality}</p>

                      </div>
                  ))}
                  </div>
                </div>


           <div className='card bottom-card bg-primary container'>
            <div className='bottom-content'>
            <h2 className='text-light'>Book Appointment<br></br> 10+ Trusted Doctors</h2>
                  <button className='btn btn-light'>Create account</button>
            </div>
                  <div>
                    <img src={assets.appointment_img} alt='appointment'/>
                  </div>
           </div>
        </div>
        
    </div>
  )
}

export default Home

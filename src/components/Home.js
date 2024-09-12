import React from 'react'
import { assets, doctors, specialityData } from '../assets/assets'
import '../style/Home.css'
import { useNavigate } from 'react-router-dom'

const newLocal =<p className='text-success'><span className='dot'>.</span>  Available</p>
const Home = () => {
 const navigate = useNavigate()
  const handleclik = (id) =>{
      navigate(`/doctors/${id}`)
  }
  const handledoctors= ()=> {
    navigate('/doctors')
  }
  return (
    <div className='home'>
      
        <div className='home-container container'>
            <div className='home-card card bg-primary text-white'>
              <div className='head-content card-body'>
                <h3 className='text-white fw-bolder'>Book Appointment <br></br>
                With Trusted Doctors</h3>
            <img className='group-img img-fluid' src={assets.group_profiles}   alt='group-profiles'/> 
            <p>Simply browse through our extensive list of trusted doctors,<br></br>
            schedule your appointment hassle-free.</p>
            <button className='btn btn-light ' onClick={handledoctors} >Book appointment   <img src={assets.arrow_icon} alt='arrow'/> </button>
            </div>
            <img className='header-img card-img' src={assets.header_img} alt='header'/>
            </div>
            <div className='speciality mt-4'>
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

                <div className='doctors mt-4'>
                  <h2>Top Doctors to Book</h2>
                  <p>Simply browse through our <br></br>extensive list of trusted<br></br> doctors.</p>
                  <div className='doc-cards container row' >
                  {doctors.slice(0,8).map((doc)=>(
                    <div className='doctor-card card card-hover-effect col-md-3 mb-4 style="width: 18rem;' key={doc._id} onClick={()=>handleclik(doc._id)}>
                      <img className='doc-img card-img-top bg-primary-light mb-3' src={doc.image} alt={doc.name}/>
                      {newLocal}
                      <h3>{doc.name}</h3>
                      <p>{doc.speciality}</p>

                      </div>
                  ))}
                  </div>
                  <button className='btn btn-light bg-primary'  onClick={handledoctors}>More <span>{'>'}{'>'}</span></button>
                </div>


           <div className='card bottom-card bg-primary container mt-4'>
            <div className='bottom-content card-body'>
            <h2 className='text-light'>Book Appointment<br></br> 10+ Trusted Doctors</h2>
                  <button className='btn btn-light '>Create account</button>
            </div>
                  <div>
                    <img className='img-fluid mb-4' src={assets.appointment_img} alt='appointment'/>
                  </div>
           </div>
        </div>
        
    </div>
  )
}

export default Home

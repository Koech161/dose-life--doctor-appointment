import React from 'react'
import { doctors } from '../assets/assets'
import {  useNavigate } from 'react-router-dom'
import '../style/About.css'
const newLocal =<p className='text-success'><span className='dot'>.</span>  Available</p>

const Doctors = () => {
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/doctors/${id}`)
    }
   
  return (
<div className='container'>
    <h1 className='text-center'>Our Trusted Doctors</h1>
<div className='row'>
    {doctors.map(doc => (
        <div className='col-md-4 mb-4' key={doc._id} onClick={() => handleDetails(doc._id)}>
            <div className='card shadow-sm border-light'>
                <img className='card-img-top card-hover-effect' src={doc.image} alt={doc.name} />
                    <div className='card-body text-center'>
                        {newLocal}
                    <h3 className='card-title'>{doc.name}</h3>
                  <p className='card-subtitle mb-2 text-muted'>{doc.speciality}</p>
                </div>
            </div>
        </div>
    ))}
</div>
</div>
  )
}

export default Doctors

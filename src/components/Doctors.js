import React from 'react'
import { doctors } from '../assets/assets'
import {  useNavigate } from 'react-router-dom'
const newLocal =<p className='text-success'><span className='dot'>.</span>  Available</p>

const Doctors = () => {
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/doctors/${id}`)
    }
   
  return (
    <div className='container'>
      {doctors.map(doc=>(
        <div className='card '  key={doc._id} onClick={()=> handleDetails(doc._id)}>
            <img className='mb-3' src={doc.image} alt={doc.name}/>
            {newLocal}
            <h3>{doc.name}</h3>
            <h4>{doc.speciality}</h4>
            <h1>${doc.fees}</h1>
        </div>
      ))}
    </div>
  )
}

export default Doctors

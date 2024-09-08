import React, { useState } from 'react'
import { assets, doctors } from '../assets/assets'
import { useParams } from 'react-router-dom'


export const Doctordetails = () => {
    const [selectedTime, setSelectedTime] = useState('');
    const {id} = useParams()
    console.log('ID from URL:', id);
    const doctor = doctors.find(doc => doc._id === id)
    console.log('Doctor Data:', doctor);
    const times = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM']
    if (!doctor) {
        return <p>Doctor not found</p>;
    }
  return (
    <div className='container'>
            <div className='details'>
                <img className='card bg-primary' src={doctor.image} alt={doctor.name}/>
                <div className='card'>
                    <h2>{doctor.name} <img src={assets.verified_icon} alt='verified'/></h2>
                    <p>{doctor.degree} - {doctor.speciality} <span className='btn'>{doctor.experience}</span></p>
                    <p>About</p>
                    <p>{doctor.about}</p>
                    <h4>Appointment fee: ${doctor.fees}</h4>
                 </div>
                 <input type='date'/>
                 <div className='time-slots'>
                 {times.map((time,index)=>(
                    <span className={`time-slot btn ${time === selectedTime ? 'selected' : '' }`} key={index}>{time}</span>
                 ))}
                 </div>
                
                 <button className='btn btn-light bg-primary text-light'>Book an appointment</button>
            </div>
          
    </div>
  )
}

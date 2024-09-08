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
            <div className='details row'>
                <div className='col-md-4'>
                <img className='card bg-primary' src={doctor.image} alt={doctor.name}/>
                </div>
                <div className='col-md-8'>
                <div className='card p-3'>
                    <h2>{doctor.name} <img src={assets.verified_icon} alt='verified' className='ms-2'/></h2>
                    <p>{doctor.degree} - {doctor.speciality} <span className='badge bg-info'>{doctor.experience}</span></p>
                    <p className='fw-bold'>About</p>
                    <p>{doctor.about}</p>
                    <h4>Appointment fee: ${doctor.fees}</h4>
                 </div>
                 </div>
                 </div>
                 <div className='my-4'>
                 <input type='date' className='form-control mb-3'/>
                 <div className='time-slots d-flex flex-wrap mb-3'>
                 {times.map((time,index)=>(
                    <span className={`time-slot btn btn-outline-primary m-1${time === selectedTime ? 'selected' : '' }`} key={index}>{time}</span>
                 ))}
                 </div>
                
                 <button className='btn btn-light bg-primary text-light btn-primary'>Book an appointment</button>
            </div>
          
    </div>
  )
}

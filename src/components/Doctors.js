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
//     <div className='container'>
        
//       {doctors.map(doc=>(
//         <div className='card p-4'  key={doc._id} onClick={()=> handleDetails(doc._id)}>
//             <img className='mb-3' src={doc.image} alt={doc.name}/>
//             {newLocal}
//             <h3>{doc.name}</h3>
//             <h4>{doc.speciality}</h4>
//             <h1>${doc.fees}</h1>
//         </div>
//       ))}
//     </div>
//   )
<div className='container'>
<div className='row'>
    {doctors.map(doc => (
        <div className='col-md-4 mb-4' key={doc._id} onClick={() => handleDetails(doc._id)}>
            <div className='card shadow-sm border-light'>
                <img className='card-img-top' src={doc.image} alt={doc.name} />
                <div className='card-body'>
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

import React from 'react'

export const Login = () => {
  return (
    <div className='login form container bg-primary text-light'>
        <label>Email</label><br></br>
        <input type='email' 
        placeholder='example@.gmail'
        className='form-control' /><br></br>
         <label>Password</label><br></br>
         <input type='password'
         placeholder='enter your password' 
         className='form-control mb-3'/>
         <button type='submit' className='btn  btn-light text-light bg-success'>Login</button>
        
    </div>
  )
}

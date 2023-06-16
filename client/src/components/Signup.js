import React from 'react'
import Navbar from './Navbar'

const Signup = () => {
  return (
    <div className="signup_container">
      <Navbar/>
      <div className="signup_body">
      <div className='signup_header'>Signup</div>
      <form className="signup_form">
        <input type="text" className='signup_input signup_fname' placeholder='enter first name'/>
        <input type="text" className='signup_input signup_lname' placeholder='enter last name'/>
        <input type="text" className='signup_input signup_email' placeholder='enter email'/>
        <input type="text" className='signup_input signup_password' placeholder='enter password'/>
        <div className="signup_submit">submit</div>
      </form>
      </div>
    </div>
  )
}

export default Signup
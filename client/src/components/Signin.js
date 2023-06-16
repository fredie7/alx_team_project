import React from 'react'
import Navbar from './Navbar'

const Signin = () => {
  return (
    <div className="signup_container">
      <Navbar/>
      <div className="signup_body">
      <div className='signup_header'>Signin</div>
      <form className="signup_form">
        <input type="text" className='signup_input signup_email' placeholder='enter email'/>
        <input type="text" className='signup_input signup_password' placeholder='enter password'/>
        <div className="signup_submit">submit</div>
      </form>
      </div>
    </div>
  )
}

export default Signin
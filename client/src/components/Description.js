import React from 'react'
import Navbar from './Navbar'
import {MdStarRate} from "react-icons/md"
import pic6 from '../images/pic6.jpg'
const Description = () => {
  return (
    <div className="desc_container">
        <Navbar/>
        <div className="desc_wrapper">
        <div className="desc_person">
          <div className="desc_pix">
            <img src={pic6} alt="" />
          </div>
          <div className="desc_name">
            fname lname
          </div>
          <div className="desc_job">
            job || job
          </div>
          <div className="desc_star">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
          </div>
          <div className="desc_about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem, voluptatem blanditiis vitae earum ab assumenda quibusdam. Voluptas quo alias nisi! Distinctio, quibusdam nostrum maiores iure dolor dolores id culpa consequuntur. Maxime quae totam, eius dolores, excepturi, provident suscipit natus iste expedita vel aut! Illo est cum alias dicta consequatur!
          </div>
        </div>
        </div>
    </div>
  )
}

export default Description
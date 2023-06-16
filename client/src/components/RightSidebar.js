import React from 'react'
import pic8 from '../images/pic8.jpg'
import pic3 from '../images/pic3.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic7.jpg'
// import {HiDesktopComputer} from "react-icons/hi"
// import {AiFillCar} from "react-icons/ai"
// import {GiHandSaw} from "react-icons/gi"
// import {GiTeacher} from "react-icons/gi"
import {AiOutlineWechat} from "react-icons/ai"

const RightSidebar = () => {
  return (
    <div className='right_sidebar'>
      <div className="top">
        
      </div>
      <div className="topp">
        
      </div>
      <div className="chats">
        <div className="chat_text">
          chats
        </div>
        <div className="chat_icon">
          <AiOutlineWechat size={35} color='yellow'/>
        </div>
      </div>
      <div className="right_chat">
      <div className="right_content">
          <div className="chat_person">
            <img src={pic8} alt="" className='chat_img'/>
          </div>
          <div className="chat_online">
          </div>
      </div>
      <div className="right_content">
          <div className="chat_person">
            <img src={pic3} alt="" className='chat_img'/>
          </div>
          <div className="chat_online">
          </div>
      </div>
      <div className="right_content">
          <div className="chat_person">
            <img src={pic5} alt="" className='chat_img'/>
          </div>
          <div className="chat_online">
          </div>
      </div>
      <div className="right_content">
          <div className="chat_person">
            <img src={pic6} alt="" className='chat_img'/>
          </div>
          <div className="chat_online">
          </div>
      </div>
      <div className="right_content">
          <div className="chat_person">
            <img src={pic7} alt="" className='chat_img'/>
          </div>
          <div className="chat_online">
          </div>
      </div>
      </div>
    </div>
  )
}

export default RightSidebar
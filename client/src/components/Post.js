import React from 'react'
import logo from "../images/pic9.jpg"
import img12 from "../images/pic14.jpg"
import img13 from "../images/pic13.jpg"
import { FaRegComment } from "react-icons/fa"
import { AiOutlineLike } from "react-icons/ai"

const Post = () => {
  return (
    <div className='post_container'>
        <div className="post_wrapper">
            <div className="post_header">
               <div className="post_left">
                    <div className="post_img">
                        <img src={logo} alt="" className='post_img_img'/>
                    </div>
                    <div className="post_header_theme">
                        <div className="post_name">
                            <p className="post_name_name">fredie ljunberg</p>
                        </div>
                        <div className="post_time">
                            <p className="post_name_name">2 min</p>
                        </div>
                    </div>
               </div>
               {/* <div className="post_right">
                <p className="dot">.</p>
                <p className="dot">.</p>
                <p className="dot">.</p>
               </div> */}
            </div>
            <div className="post_post">
                <p className='make_post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore dicta quasi deleniti maiores fuga!</p>
            </div>
            <div className="post_post_img">
                <img src={img12}alt="" className='post_post_img_img'/>
            </div>
            <div className="post_input_wrapper">
                <input type="text" className='post_input' placeholder='Write a post.......'/>
            </div>
            <div className="post_icons">
                <div className="comment_section">
                  <FaRegComment size="20px" className='p_icon'/>
                  <div className="comment_text">
                    <p className='ct'>comments</p>
                  </div>
                  <div className="comment_number">
                    <p className='cn'>204</p>
                  </div>
                </div>
                <div className="like_section">
                  <AiOutlineLike size="20px" className='p_icon'/>
                  <div className="like_number">
                    <p className='ln'>116</p>
                  </div>
                </div>
            </div>
        </div>
        <div className="post_wrapper">
            <div className="post_header">
               <div className="post_left">
                    <div className="post_img">
                        <img src={logo} alt="" className='post_img_img'/>
                    </div>
                    <div className="post_header_theme">
                        <div className="post_name">
                            <p className="post_name_name">fredie ljunberg</p>
                        </div>
                        <div className="post_time">
                            <p className="post_name_name">2 min</p>
                        </div>
                    </div>
               </div>
            </div>
            <div className="post_post">
                <p className='make_post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore dicta quasi deleniti maiores fuga!</p>
            </div>
            <div className="post_post_img">
                <img src={img13}alt="" className='post_post_img_img'/>
            </div>
            <div className="post_input_wrapper">
                <input type="text" className='post_input' placeholder='Write a post.......'/>
            </div>
            <div className="post_icons">
                <div className="comment_section">
                  <FaRegComment size="20px" className='p_icon'/>
                  <div className="comment_text">
                    <p className='ct'>comments</p>
                  </div>
                  <div className="comment_number">
                    <p className='cn'>204</p>
                  </div>
                </div>
                <div className="like_section">
                  <AiOutlineLike size="20px" className='p_icon'/>
                  <div className="like_number">
                    <p className='ln'>116</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
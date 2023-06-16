import React from 'react'
import logo from "../images/images1.jpg"
// import AiOutlineMenuUnfold from "react-icons"

const Navbar = () => {
  return (
    <>
      <div className='nav_container'>
        <div className="menu_wrapper">
          <div className="menu_bar">
                <div className="inner_menu bar1"></div>
                <div className="inner_menu bar2"></div>
                <div className="inner_menu bar3"></div>
          </div>
          <div className="search_bar">
            <input type="text" className='nav_search' placeholder='Search...'/>
          </div>
        </div>
        <div className="logo_wrapper">
          <div className="logo">
            <img src={logo} alt="" className='logo_img'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
import React from 'react'
import {HiDesktopComputer} from "react-icons/hi"
import {AiFillCar} from "react-icons/ai"
import {GiHandSaw} from "react-icons/gi"
import {GiTeacher} from "react-icons/gi"
import {MdOutlineAgriculture} from "react-icons/md"
import {GiMusicalKeyboard} from "react-icons/gi"
import {MdOutlineConstruction} from "react-icons/md"

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className="side1">
          {/* side1 */}
        </div>
        <div className="welcome">
          <p className="signedIn">
            welcome fredie
          </p>
        </div>
        <div className="sidebar_content">
          <div className="sidbar_category">
            <span className="cat_tech">
              <p>technology</p>
            </span>
            <span className="cat_icon">
              <HiDesktopComputer />
            </span>
          </div>
          <div className="sidbar_category">
            <span className="cat_tech">
              <p>traffic</p>
            </span>
            <span className="cat_icon">
              <AiFillCar />
            </span>
          </div>
          <div className="sidbar_category">
            <span className="cat_tech">
              <p>furniture</p>
            </span>
            <span className="cat_icon">
              <GiHandSaw />
            </span>
          </div>
          <div className="sidbar_category">
            <span className="cat_tech">
              <p>Education</p>
            </span>
            <span className="cat_icon">
              <GiTeacher />
            </span>
          </div>
          <div className="sidbar_category">
            <span className="cat_tech">
              <p>Agriculture</p>
            </span>
            <span className="cat_icon">
              <MdOutlineAgriculture />
            </span>
          </div>
          <div className="sidbar_category">
            <span className="cat_tech">
              <p>Entertainment</p>
            </span>
            <span className="cat_icon">
              <GiMusicalKeyboard />
            </span>
          </div>
          <div className="sidbar_category">
            <span className="cat_tech">
              <p>Construction</p>
            </span>
            <span className="cat_icon">
              <MdOutlineConstruction />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
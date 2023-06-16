import React from 'react'
import pic3 from '../images/pic3.jpg'
import pic8 from '../images/pic8.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import {MdStarRate} from "react-icons/md"

const PictureReels = () => {
  return (
    <>
      <div className='picreel_container'>
        <div className="picreel_item">
            <div className="picreel_img">
                <img src={pic8} alt="" className='picreel_pic'/>
            </div>
            <div className="pic_reel_name">name</div>
            <div className="pic_reel_job">programmer</div>
            <div className="rating">
                <MdStarRate color='yellow'/>
                <MdStarRate />
                <MdStarRate />
            </div>
        </div>
        <div className="picreel_item">
            <div className="picreel_img">
                <img src={pic3} alt="" className='picreel_pic'/>
            </div>
            <div className="pic_reel_name">name</div>
            <div className="pic_reel_job">musician</div>
            <div className="rating">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
            </div>
        </div>
        <div className="picreel_item">
            <div className="picreel_img">
                <img src={pic5} alt="" className='picreel_pic'/>
            </div>
            <div className="pic_reel_name">name</div>
            <div className="pic_reel_job">truck driver</div>
            <div className="rating">
                <MdStarRate color='yellow'/>
                <MdStarRate color='yellow'/>
                <MdStarRate />
            </div>
        </div>
        <div className="picreel_item">
            <div className="picreel_img">
                <img src={pic6} alt="" className='picreel_pic'/>
            </div>
            <div className="pic_reel_name">name</div>
            <div className="pic_reel_job">electrician</div>
            <div className="rating">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
            </div>
        </div>
        {/* <div className="picreel_item">
            <div className="picreel_img">
                <img src={pic3} alt="" className='picreel_pic'/>
            </div>
        </div> */}
      </div>
    </>
  )
}

export default PictureReels
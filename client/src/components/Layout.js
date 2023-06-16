import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import PictureReels from './PictureReels'
import Banner from './Banner'
import Post from './Post'
import RightSidebar from './RightSidebar'

const Layout = () => {
  return (
    <div className='layout'>
        <Navbar/>
        <Banner/>
        <PictureReels/>
        <Post/>
        <Sidebar/>
        <RightSidebar/>
    </div>
  )
}

export default Layout
import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [isOpen,setisOpen] = useState(false)
  const toggleSideBar=()=>{
    setisOpen(!isOpen)
  }
  return <>
  <Navbar toggleSideBar={toggleSideBar}/>
  <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar}/>
  {children}
  <Footer/>
  
  </>
}

export default Layout

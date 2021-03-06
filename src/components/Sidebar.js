import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({isOpen , toggleSideBar}) => {
  
  return <aside className={isOpen?"sidebar show-sidebar":"sidebar"}>
    <button onClick={toggleSideBar} className="close-btn" type="button">
      <FaTimes/>
    </button>
    <div className="side-container">
      <ul className={isOpen?"sidebar-links":null}>
        {links.map((link)=>{
          return<li key={link.id}>
            <Link onClick={()=>{setTimeout(()=>{toggleSideBar()},100)}} to={link.url}>{link.text}</Link>
            </li>
        })}
      </ul>
      <ul className={isOpen?"social-links sidebar-icons":null}>
        {socialLinks.map((link)=>{
          return <li key={link.id}>
            <a className="social-link" href={link.url}>
              {link.icon}
            </a>

          </li>
        })}

      </ul>
    </div>
  </aside>
}

export default Sidebar

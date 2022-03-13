import React from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = () => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="Joe Dev"/>
        <button type="button" className="toggle-btn">
          <FaAlignRight/>
        </button>
      </div>
      <div className="nav-links">
        {pageLinks.map(item=>{
          return <Link key={item.id} to={item.url}>{item.text}</Link>
        })}
      </div>
    </div>

  </nav>
}

export default Navbar

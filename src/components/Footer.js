import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return <footer className="footer">
    <div>
      <div className="footer-links social-links">
        {socialLinks.map(link=>{
         return <a className="social-link" key={link.id} href={link.url}>
            {link.icon}
          </a>
        })}
      </div>

    </div>
  </footer>
}

export default Footer

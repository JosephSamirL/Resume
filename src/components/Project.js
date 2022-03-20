import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({description, title , slug, github,stack,url,image,index}) => {
  return <article className="project">
    <GatsbyImage image={getImage(image)} className="project-img" alt={title}/>
    <div className="project-info">
      <span className="project-number">{index+1}</span>
      <Link to={`/projects/${slug}`} className="project-slug"><h3>{title}</h3></Link>
      <p className="project-desc">{description}</p>
      <div className="project-stack">{
        stack.map(item=>{
          return <span key={item.id}>{item.title}</span>
        })
      }</div>
      <div className="project-links">
        {github &&<a target={"blank"} href={github}>
          <FaGithubSquare className="project-icon"></FaGithubSquare>  
        </a>}
        {url &&<a  target={"blank"} href={url}>
          <FaShareSquare className="project-icon"></FaShareSquare>  
        </a>}
      </div>
    </div>
  </article>
}

export default Project

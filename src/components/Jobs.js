import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
const query = graphql`
  {
    allStrapiJob(sort: {fields: createdAt, order: DESC}){
      nodes {
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`
const Jobs = () => {
  const [value , setValue] = useState(0)
  const data = useStaticQuery(query)
  const {allStrapiJob:{nodes:jobs}} = data;
  const {position,company,date,desc} = jobs[value]
  
  return <section className="section jobs">
    <Title title="exprience"/>
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item,index)=>{
          return<button onClick={()=>{setValue(index)}} key={index} className={value === index? "job-btn active-btn": "job-btn"}>{item.company}</button>
        })}

      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {desc.map(item=>{
          return<div className="job-desc" key={item.id}>
            <FaLongArrowAltRight className="job-icon"></FaLongArrowAltRight>
            <p>{item.name}</p>
          </div>
        })}
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export default Jobs

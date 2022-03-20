import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({data:{allStrapiProject:{nodes:projects}}}) => {
  return (
    <>
      <main>
        <section className="project-page">
          <Projects title="all projects" projects={projects}/>
        </section>
      </main>
    </>
  )
}
export const query = graphql`
  {
    allStrapiProject {
      nodes {
        description
        featured
        github
        id
        title
        url
        slug
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
export default ProjectsPage

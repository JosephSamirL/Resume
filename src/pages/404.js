import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1> sorry nothing here did you mean</h1>
          <Link to="/" className="btn">This ?</Link>
        </div>
      </main>
    </>
  )
}

export default Error

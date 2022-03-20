import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form  action="https://formspree.io/f/mbjwkqwo"
                 method="POST">
            <div className="form-group">
              <input 
                type="text"
                name="name"
                placeholder="John Doe"
                className="form-control"
              />
                <input 
                type="email"
                name="email"
                placeholder="JohnDoe@Dmail.com"
                className="form-control"
              />
              <textarea name="meaasage" rows="5" placeholder="message" className="form-control">


              </textarea>
            </div>
            <button type="submit" className="submit-btn btn">Send</button>

          </form>
        </article>

      </section>
    </>
  )
}

export default contact

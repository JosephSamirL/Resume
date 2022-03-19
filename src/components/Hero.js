import React  from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"
const animate = ()=>{
  var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 800;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
        document.body.appendChild(css);
    
}

const Hero = () => {
    useEffect(() => {
    animate()
  });

  return (<>
  <header className="hero">
    <section className="section-center hero-center">
      <article className="hero-info">
        <div>

          <div className="underline"></div>
            <h1 className="typewrite" data-period="2000" data-type='[ "Hi, Im Joe.", "UX/UI designer.", "Front End Developer.","Javascript Wizard." ]'></h1>
            <span className="wrap"></span>
            <h4>Front End Developer, UX/UI designer, Javascript Wizard </h4>
            <Link to="/contact" className="btn">Contact Me</Link>
            <div className="social-links">
              {socialLinks.map(item=>{
                return<a className="social-link" href={item.url}>{item.icon}</a>
              })}
            </div>
          
        </div>

      </article>
      <StaticImage src="../assets/images/hero.svg" alt="portfolio" className="hero-img" placeholder="blurred"/>
      
    </section>
  </header>
  </>);
}

export default Hero

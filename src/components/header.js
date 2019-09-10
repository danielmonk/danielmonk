import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import Logo from "../components/images/logoImage"
import Logo from "../images/danielmonk.gif"
import Headroom from "react-headroom"
import FacebookIcon from "../images/facebook-inline.svg"
import LinkedInIcon from "../images/linkedin-inline.svg"
import instagramIcon from "../images/instagram-icon.svg"
import githubIcon from "../images/github-logo.svg"
import MailIcon from "../images/envelope-inline.svg"
import '../js/helpers';

const Header = ({ siteTitle }) => (
  <div>
  <Headroom>
    <header className="header">
      <div className="header--logo">
        <div className="logo">
          <Link to="/"><div className="logo"></div></Link>
        </div>
      </div>
      <div className="header--nav">
        <ul>
          <li><a href="mailto:danieljmonk@gmail.com">Contact</a></li>
        </ul>
      </div>
    </header>
  </Headroom>
    <div className="sticky-sidebar">
      <div className="social-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-monk-a808b8a3/" className="icon-links w-inline-block"><img className="icon" src={LinkedInIcon} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/danielmonk" className="icon-links w-inline-block"><img className="icon" src={instagramIcon} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/danielmonk" className="icon-links w-inline-block"><img className="icon" src={githubIcon} /></a>
      </div>
      <div className="sidebar-line"></div>
      <div className="sidebar-text">Get in touch</div>
      <a href="mailto:danieljmonk@gmail.com" className="sidebar-icon-parent w-inline-block"><img className="icon" src={MailIcon} /></a>
    </div>  
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

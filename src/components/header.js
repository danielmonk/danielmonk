import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/images/logoImage"
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
    <header class="header">
      <div class="header--logo">
        <div class="logo">
          <Link to="/"><Logo /></Link>
        </div>
      </div>
      <div class="header--nav">
        <ul>
          <li><a href="mailto:danieljmonk@gmail.com">Contact</a></li>
        </ul>
      </div>
    </header>
  </Headroom>
    <div class="sticky-sidebar">
      <div class="social-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-monk-a808b8a3/" class="icon-links w-inline-block"><img class="icon" src={LinkedInIcon} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/danielmonk" class="icon-links w-inline-block"><img class="icon" src={instagramIcon} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/danielmonk" class="icon-links w-inline-block"><img class="icon" src={githubIcon} /></a>
      </div>
      <div class="sidebar-line"></div>
      <div class="sidebar-text">Get in touch</div>
      <a href="mailto:danieljmonk@gmail.com" class="sidebar-icon-parent w-inline-block"><img class="icon" src={MailIcon} /></a>
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

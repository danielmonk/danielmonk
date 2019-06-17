import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/images/logoImage"
import FacebookIcon from "../images/facebook-inline.svg"
import LinkedInIcon from "../images/linkedin-inline.svg"
import instagramIcon from "../images/instagram-icon.svg"
import githubIcon from "../images/github-logo.svg"
import MailIcon from "../images/envelope-inline.svg"
import LoadingIcon from "../images/loading.svg"

const Footer = ({ siteTitle }) => (
  <div>
    <footer class="footer">
        <div class="footer--menu">
          <ul class="ticker">
            <li>© Daniel Monk 2019. All rights reserved</li>
            <li><a href="mailto:danieljmonk@gmail.com">Mail: danieljmonk@gmail.com</a></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
      <div class="sticky-sidebar">
        <div class="social-icons">
          <a target="_blank" href="https://www.linkedin.com/in/daniel-monk-a808b8a3/" class="icon-links w-inline-block"><img class="icon" src={LinkedInIcon} /></a>
          <a target="_blank" href="https://www.instagram.com/danielmonk" class="icon-links w-inline-block"><img class="icon" src={instagramIcon} /></a>
          <a target="_blank" href="https://www.github.com/danielmonk" class="icon-links w-inline-block"><img class="icon" src={githubIcon} /></a>
        </div>
        <div class="sidebar-line"></div>
        <div class="sidebar-text">Get in touch</div>
        <a href="mailto:danieljmonk@gmail.com" class="sidebar-icon-parent w-inline-block"><img class="icon" src={MailIcon} /></a>
      </div>  
    </footer>
    <div class="loading">
      <img class="icon" src={LoadingIcon} />
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

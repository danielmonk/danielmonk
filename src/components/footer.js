import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/images/logoImage"
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

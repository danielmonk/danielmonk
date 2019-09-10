import PropTypes from "prop-types"
import React from "react"
import LoadingIcon from "../images/loading.svg"

const Footer = ({ siteTitle }) => (
  <div>
    <footer class="footer">
        <div class="footer--menu">
          <ul class="ticker">
            <li>© Daniel Monk 2019. All rights reserved</li>
            <li><a href="mailto:danieljmonk@gmail.com">Mail: danieljmonk@gmail.com</a></li>
          </ul>
        </div>
    </footer>
    <div class="cursor"></div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

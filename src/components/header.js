import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/images/logoImage"
import Headroom from "react-headroom"
import '../js/helpers';

const Header = ({ siteTitle }) => (
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

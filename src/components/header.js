import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0065BF`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p>
        <Link
          to="/"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          // }}
        >
          {siteTitle}
        </Link>
      </p>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          // }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Testing Study Escape`,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
<<<<<<< HEAD
      background: `#0065BF`,
=======
      background: `rebeccapurple`,
>>>>>>> 7e33a781fea7347725ba7a20d34d0c4b04d1cb49
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
<<<<<<< HEAD
  siteTitle: `Scotland Study Trip`,
=======
  siteTitle: ``,
>>>>>>> 7e33a781fea7347725ba7a20d34d0c4b04d1cb49
}

export default Header

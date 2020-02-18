import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
<<<<<<< HEAD
    <p>Holy mackerel, it's the page for the Scotland Study Trip!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p><Link to="/about/">About</Link></p>
    <p><Link to="/attending">Attending</Link></p>
    <p><Link to="/codeofconduct/">Code of Conduct</Link></p>
    <p><Link to="/schedule/">Rough Schedule</Link></p>
    <p><Link to="/sponsorus">Sponsor Us</Link></p>
=======
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
>>>>>>> 7e33a781fea7347725ba7a20d34d0c4b04d1cb49
  </Layout>
)

export default IndexPage

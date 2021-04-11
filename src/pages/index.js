import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>About the trip</h1>
    <p></p>
    <h2>The organisers</h2>
    <p><a href="https://twitter.com/ezagroba">Elizabeth Zagroba</a> and <a href="https://twitter.com/gwendiagram">Gwen Diagram</a></p>

<h2>What?</h2>
<p>A study trip to Scotland for people interested in testing to deep dive into a specific topic.</p>
<h2>When? </h2>
<p><del>Saturday, 29 Aug 2020 to Saturday, 05 Sep 2020.</del> Postponed until it makes sense. For details about what the week might look like, please refer to the <Link to="/schedule">schedule.</Link></p>
<h2>Who? </h2>
<p>Up to 17 people. The organisers will seek a balance of participants from among those interested.</p>
<h2>How? </h2>
<p>Registration isn't open yet, but <a href="https://me843905.typeform.com/to/LvzU5H">give us your name and your email here</a> and we'll let you know when it is.
</p>
<h2>Why?</h2>
<p>In 2019, Gwen went to Krakow and studied philosophy for three days, ate noodles and had a brilliant time. She would like to extend the learning opportunity to other testers in a serene setting with a discussion at the end.</p>

  </Layout>
)

export default IndexPage

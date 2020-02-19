import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About the trip</h1>
    <h2> The organisers </h2>
    <p><Link to="https://twitter.com/ezagroba">Elizabeth Zagroba</Link> and <Link to="https://twitter.com/gwendiagram">Gwen Diagram</Link></p>

<h2>What?</h2>
<p>A study trip to Scotland for people interested in testing to deep dive into a specific topic.</p>
<h2> When? </h2>
<p>July or August 2020 for a week. Arrive on Sunday, leave on Sunday. Study the topic from Monday - Thursday and present findings Friday and Saturday.</p>
<h2> Who? </h2>
<p>Up to 15 people</p>
<h2> How? </h2>
<p>We will hire a castle or set of chalets. Catering is considered, most of these options will be self catering. To maximise study time and to keep costs down, Gwen has suggested a friend to attend who can look after cooking breakfast, lunch and dinner at a cost of £1000 and free accommodation.</p>
<p>Other options are to find somewhere with catering which may increase the price.</p>
<h2>Why?</h2>
<p>Last year, Gwen went to Krakow and studied philosophy for three days, ate noodles and had a brilliant time. She would like to extend the learning opportunity to other testers in a serene setting with a discussion at the end.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
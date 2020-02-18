import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Schedule = () => (
  <Layout>
    <SEO title="Schedule" />

<p>Each day will involve a walk around the grounds, food and an after dinner activity.</p>
    
<h3>Sunday</h3>
<p>15:00 - People arrive</p>
<p>Open Space</p>
<p>Introductory Dinner</p>

<h3>Monday</h3>
<p>Open the week - include safety, sponsors, schedule etc.</p>
<p>Topic announcement and grouping</p>
<p>After dinner activity: Boardgames</p>


<h3>Tuesday</h3>
<p>After dinner activity: ?</p>

<h3>Wednesday</h3>
<p>After dinner activity: ?</p>

<h3>Thursday</h3>
<p>Peer conference submissions</p>
<p>Lightning Talks</p>
<p>Study week close</p>
<p>After dinner activity: ?</p>

<h3>Friday (Peer Conference)</h3>
<p>Peer conference announcement</p>
<p>After dinner activity: ?</p>

<h3>Saturday (Peer Conference)</h3>
<p>Peer conference finish</p>
<p>Retrospective</p>
<p>Conference close</p>


<Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Schedule
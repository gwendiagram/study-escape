import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Attending = () => (
  <Layout>
    <SEO title="Attending" />
    <h1>What you need to know about attending</h1>
    <h2>Purpose</h2>
<p>For attendees to gain a better understanding of a topic that is related to testing that they are interested in.  Attendees can study alone or within groups.  </p>

<p>Attendees will propose their topic to the rest of the group on the first day via a 1-5 minute introduction to the topic.  At this point, attendees can request that other members join them to study their topic.  At this point, the attendee will also specify the output that they would like to achieve.  Each topic will have a clear output.</p>

<p>There will also be structured times where people can experiment with workshops that they have been working on to gain feedback from others.  We would like this to be a safe place where people can receive feedback for their work that they would like to submit to conferences etc.</p>

<h2>Topics</h2>
<p>Ministry of Testing propose a list of topics to get people’s ideas flowing.</p>

<h3>Example of topics</h3>
<p>Observability of asynchronous systems</p>
<p>Personas in exploratory testing </p>

<h3>Example of unacceptable topics</h3>
<p>A study on why cats purr (this has nothing to do with testing and will not help the testing community in testing)</p>

<h3>Example of a topic that is the right size</h3>
<p>Exploratory testing (too big)</p>
<p>Personas in exploratory testing (Goldilocks, just right)</p>
<p>Using personas in end to end testing (too small and specific, this could be completed in a day)</p>

<h3>Output types</h3>
<ul>
<li>Blog post</li>
<li>Video</li>
<li>Training course</li>
<li>Workshop </li>
<li>Conference submission</li>
<li>Book chapter(s)</li>
<li>Presentation (talk)</li>
<li>Webinar</li>
<li>White paper</li>
<li>Website</li>
</ul>

<h3>What we need from you ahead of time</h3>
<ul>
    <li>Ideas for forced fun</li>
    <li>If you want to present a workshop or a talk for feedback</li>
    <li>Any other ideas for sessions that you would like to run</li>
    <li>Dietary requirements</li>
    <li>If you aren’t available for the whole time, when you are arriving/leaving</li>
    <li>Any concerns </li>
    <li>Share the study week with your friends ahead of time</li>
</ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Attending
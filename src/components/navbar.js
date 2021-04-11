import React from "react"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
  <Navbar.Brand href="/">Testing Study Escape</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
      <Nav.Link href="/attending">Attending</Nav.Link>
      <Nav.Link href="/codeofconduct">Code of Conduct</Nav.Link>
      <Nav.Link href="/schedule">Rough Schedule</Nav.Link>
      <Nav.Link href="/sponsorus">Sponsor Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default CustomNavbar
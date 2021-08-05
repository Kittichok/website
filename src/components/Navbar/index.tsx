import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#journey">Journey</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;
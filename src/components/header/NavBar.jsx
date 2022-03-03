import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/images/logo.png';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];
  return (
    <Navbar fixed="top" bg="white" className="border-bottom border-2">
      <Container className="d-flex justify-content-between p-0">
        <Navbar.Brand className="h1 d-flex gap-3 align-items-center fs-2">
          <img
            src={logo}
            alt="logo"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
          Space Travelers&apos; Hub
        </Navbar.Brand>
        <Nav>
          {
            links.map((link) => (
              <LinkContainer to={link.path} key={link.id}>
                <Nav.Link>
                  {link.text}
                </Nav.Link>
              </LinkContainer>
            ))
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;

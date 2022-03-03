import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Navbar>
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
    </Navbar>
  );
};

export default Navigation;

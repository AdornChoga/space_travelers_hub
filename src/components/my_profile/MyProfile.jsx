import React from 'react';
import { Container } from 'react-bootstrap';

import MyMissions from './MyMissions';
import MyRockets from './MyRockets';

const MyProfile = () => (
  <Container className="d-flex">
    <MyMissions />
    <MyRockets />
  </Container>
);

export default MyProfile;

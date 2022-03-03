import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Rocket from './Rocket';
import { initializeState } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (rockets.length === 0) dispatch(initializeState());
  }, []);
  return (
    <Container className="d-flex flex-column gap-4 pb-5">
      {
        rockets.map((rocket) => (
          <Rocket key={rocket.id} rocketInfo={rocket} />
        ))
      }
    </Container>
  );
};

export default Rockets;

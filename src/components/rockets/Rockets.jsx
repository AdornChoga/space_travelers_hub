import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import classes from './Rockets.module.css';
import { initializeState } from '../../redux/rockets/rockets';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (rockets.length === 0) dispatch(initializeState());
  }, []);
  return (
    <div className={classes.rocketsContainer}>
      {
        rockets.map((rocket) => (
          <Rocket key={rocket.id} rocketInfo={rocket} />
        ))
      }
    </div>
  );
};

export default Rockets;

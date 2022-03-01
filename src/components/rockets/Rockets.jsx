import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeState } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (rockets.length === 0) dispatch(initializeState());
  }, []);
  return (
    <h1>Rockets</h1>
  );
};

export default Rockets;

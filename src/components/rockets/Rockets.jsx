import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { initializeState } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (rockets.length === 0) {
      const { data } = await axios.get('https://api.spacexdata.com/v3/rockets');
      const rockets = data.map((rocket) => (
        {
          id: rocket.id,
          rocket_name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[0],
        }
      ));
      dispatch(initializeState(rockets));
    }
  }, []);
  return (
    <h1>Rockets</h1>
  );
};

export default Rockets;

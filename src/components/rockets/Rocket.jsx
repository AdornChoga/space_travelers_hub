import React from 'react';
import PropTypes from 'prop-types';
import classes from './Rockets.module.css';

const Rocket = (props) => {
  const { rocketInfo } = props;
  const { rocketName, description, rocketImage } = rocketInfo;
  return (
    <ul className={classes.rocket}>
      <li className={classes.imageContainer}>
        <img src={rocketImage} alt="rocket" />
      </li>
      <li className={classes.rocketDetails}>
        <h3>{ rocketName }</h3>
        <p>{ description }</p>
        <button type="button" className={classes.reserve}>Reserve Rocket</button>
      </li>
    </ul>
  );
};

Rocket.propTypes = {
  rocketInfo: PropTypes.shape({
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;

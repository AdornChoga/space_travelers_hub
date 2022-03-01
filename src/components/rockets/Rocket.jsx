import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './Rockets.module.css';
import { reserveRocket } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocketInfo } = props;
  const {
    id, rocketName, description, rocketImage,
  } = rocketInfo;
  const handleReserve = (e) => {
    dispatch(reserveRocket(+e.target.id));
  };
  return (
    <ul className={classes.rocket}>
      <li className={classes.imageContainer}>
        <img src={rocketImage} alt="rocket" />
      </li>
      <li className={classes.rocketDetails}>
        <h3>{ rocketName }</h3>
        <p>{ description }</p>
        <button type="button" className={classes.reserve} onClick={handleReserve} id={id}>
          Reserve Rocket
        </button>
      </li>
    </ul>
  );
};

Rocket.propTypes = {
  rocketInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;

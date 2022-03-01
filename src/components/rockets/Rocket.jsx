import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './Rockets.module.css';
import { reserveRocket, cancelReservation } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocketInfo } = props;
  const {
    id, rocketName, description, rocketImage, reserved,
  } = rocketInfo;
  const handleReserve = (e) => {
    if (!reserved) {
      dispatch(reserveRocket(+e.target.id));
    } else {
      dispatch(cancelReservation(+e.target.id));
    }
  };
  return (
    <ul className={classes.rocket}>
      <li className={classes.imageContainer}>
        <img src={rocketImage} alt="rocket" />
      </li>
      <li className={classes.rocketDetails}>
        <h3>{ rocketName }</h3>
        <p>
          {reserved ? <span className={classes.reservedBadge}>Reserved</span> : ''}
          { description }
        </p>
        <button type="button" className={reserved ? classes.cancel : classes.reserve} onClick={handleReserve} id={id}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
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
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;

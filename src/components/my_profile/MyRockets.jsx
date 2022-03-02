import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './MyProfile.module.css';
import { cancelReservation } from '../../redux/rockets/rockets';

const MyRockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const handleCancellation = (e) => {
    dispatch(cancelReservation(+e.target.id));
  };
  return (
    <div className={classes.my_rockets_container}>
      <h2 className={classes.my_rockets_title}>My rockets</h2>
      { reservedRockets.length === 0 ? (
        <p className={classes.no_missions_message}>No rockets reserved yet!</p>
      ) : (
        <ul className={classes.my_rockets_list}>
          {
            reservedRockets.map((rocket) => (
              <li key={rocket.id} className={classes.my_rockets_list_item}>
                <p>{ rocket.rocketName }</p>
                <button type="button" className={classes.cancel} onClick={handleCancellation} id={rocket.id}>
                  Cancel Reservation
                </button>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default MyRockets;

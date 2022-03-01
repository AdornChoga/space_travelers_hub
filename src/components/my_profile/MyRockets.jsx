import React from 'react';
import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className={classes.my_rockets_container}>
      <h1 className={classes.my_rockets_title}>My rockets</h1>
      { reservedRockets.length === 0 ? (
        <p className={classes.no_missions_message}>No rockets reserved yet!</p>
      ) : (
        <ul className={classes.my_rockets_list}>
          {
            reservedRockets.map((rocket) => (
              <li key={rocket.id} className={classes.my_missions_list_item}>
                { rocket.rocketName }
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default MyRockets;

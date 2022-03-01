import React from 'react';
import { useSelector } from 'react-redux';

import classes from './MyProfile.module.css';

const MyMissions = () => {
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className={classes.my_mission_container}>
      <h2 className={classes.my_missions_title}>My Missions</h2>
      {
        myMissions.length === 0
          ? <p className={classes.no_missions_message}>No mission joined yet!</p>
          : (
            <ul className={classes.my_missions_list}>
              {
                myMissions.map((mission) => (
                  <li
                    key={mission.mission_id}
                    className={classes.my_missions_list_item}
                  >
                    {mission.mission_name}
                  </li>
                ))
              }
            </ul>
          )
      }
    </div>
  );
};

export default MyMissions;

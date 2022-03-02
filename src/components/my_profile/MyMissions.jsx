import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './MyProfile.module.css';
import { leaveMission } from '../../redux/missions/missions';

const MyMissions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((mission) => mission.reserved);

  const leaveMissionHandler = (e) => {
    const { id } = e.target;
    dispatch(leaveMission({ id }));
  };

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
                    <p>{mission.mission_name}</p>
                    <button id={mission.mission_id} className={classes.btn_leave} type="button" onClick={leaveMissionHandler}>
                      Leave Mission
                    </button>
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

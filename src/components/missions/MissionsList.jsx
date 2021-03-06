import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';
import Mission from './Mission';
import classes from './MissionsList.module.css';

const MissionsList = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissions());
  }, []);

  return (
    <ul className={classes.missions_list}>
      <li className={`${classes.mission_list_header}`}>
        <p>Name</p>
        <p>Description</p>
        <p>Status</p>
        <p>Join/Leave</p>
      </li>
      {
        missions.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))
      }
    </ul>
  );
};

export default MissionsList;

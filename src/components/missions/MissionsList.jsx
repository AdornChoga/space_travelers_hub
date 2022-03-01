import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';
import Mission from './Mission';
import classes from './MissionsList.module.css';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissions());
  }, []);

  return (
    <table>
      <tbody>
        <tr className={classes.table_header_row}>
          <th className={classes.table_header}>Name</th>
          <th className={classes.table_header}>Description</th>
          <th className={classes.table_header}>Status</th>
          <th className={classes.table_header}>Join/Leave</th>
        </tr>
        {
          missions.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))
        }
      </tbody>
    </table>
  );
};

export default MissionsList;

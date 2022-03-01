import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import classes from './MissionsList.module.css';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const joinMissionHandler = (e) => {
    const { id } = e.target.parentNode.parentNode;
    dispatch(joinMission({ id }));
  };

  const leaveMissionHandler = (e) => {
    const { id } = e.target.parentNode.parentNode;
    dispatch(leaveMission({ id }));
  };

  return (
    <li id={mission.mission_id}>
      <div className={classes.mission_name}>
        {mission.mission_name}
      </div>
      <div className={classes.mission_description}>
        {mission.description}
      </div>
      <div className={classes.mission_status}>
        <p>Not A Member</p>
      </div>
      <div className={classes.mission_join_leave}>
        <button type="button" onClick={joinMissionHandler}>
          Join Mission
        </button>
        <button type="button" onClick={leaveMissionHandler}>
          Leave Mission
        </button>
      </div>
    </li>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;

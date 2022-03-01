import React from 'react';
import PropTypes from 'prop-types';

import classes from './MissionsList.module.css';

const Mission = ({ mission }) => (
  <li id={mission.mission_id}>
    <div className={classes.mission_name}>{mission.mission_name}</div>
    <div className={classes.mission_description}>{mission.description}</div>
    <div className={classes.mission_status}><p>Not A Member</p></div>
    <div className={classes.mission_join_leave}><button type="button">Join Mission</button></div>
  </li>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;

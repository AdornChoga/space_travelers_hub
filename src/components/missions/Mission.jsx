import React from 'react';
import PropTypes from 'prop-types';

import classes from './MissionsList.module.css';

const Mission = ({ mission }) => (
  <tr id={mission.mission_id} className={classes.table_body_row}>
    <td className={classes.mission_name}>{mission.mission_name}</td>
    <td className={classes.mission_description}>{mission.description}</td>
    <td className={classes.mission_status}>Not A Member</td>
    <td><button type="button">Join Mission</button></td>
  </tr>
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

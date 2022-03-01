import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  return (
    <tr id={mission.mission_id} className="table_body_row">
      <td className="mission_name">{mission.mission_name}</td>
      <td className="mission_description">{mission.description}</td>
      <td className="mission_status">{mission.reserved && 'join'}</td>
      <td><button type="button">Join Mission</button></td>
    </tr>
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

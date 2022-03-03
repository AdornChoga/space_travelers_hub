import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Badge,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

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
    <Row id={mission.mission_id}>
      <Col className="border pt-1 fw-bold">
        {mission.mission_name}
      </Col>
      <Col md={7} className="border py-1">
        {mission.description}
      </Col>
      <Col className="d-flex align-items-center justify-content-center border">
        {
          !mission.reserved
          && (
            <Badge bg="secondary" className="me-2">Not A Member</Badge>
          )
        }
        {
          mission.reserved
          && (
            <Badge bg="info" className="me-2">Active Member</Badge>
          )
        }
      </Col>
      <Col className="d-flex align-items-center justify-content-center border">
        {
          !mission.reserved
          && (
            <Button variant="outline-secondary" onClick={joinMissionHandler}>
              Join Mission
            </Button>
          )
        }
        {
          mission.reserved
          && (
            <Button variant="outline-danger" onClick={leaveMissionHandler}>
              Leave Mission
            </Button>
          )
        }
      </Col>
    </Row>
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

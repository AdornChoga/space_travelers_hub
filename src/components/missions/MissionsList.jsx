import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';
import Mission from './Mission';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissions());
  }, []);

  return (
    <Container className="pb-4">
      <Row>
        <Col className="border fw-bold">Name</Col>
        <Col className="border fw-bold" md={7}>Description</Col>
        <Col className="border fw-bold">Status</Col>
        <Col className="border fw-bold">Join/Leave</Col>
      </Row>
      {
        missions.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))
      }
    </Container>
  );
};

export default MissionsList;

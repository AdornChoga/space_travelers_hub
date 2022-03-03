import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap';

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
    <Container className="d-flex flex-column">
      <h2>My Missions</h2>
      {
        myMissions.length === 0
          ? <p className="border border-warning p-3 rounded-3">No mission joined yet!</p>
          : (
            <ul className="list-group">
              {
                myMissions.map((mission) => (
                  <li
                    key={mission.mission_id}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <p>{mission.mission_name}</p>
                    <Button variant="secondary" className="opacity-50" id={mission.mission_id} onClick={leaveMissionHandler}>
                      Leave Mission
                    </Button>
                  </li>
                ))
              }
            </ul>
          )
      }
    </Container>
  );
};

export default MyMissions;

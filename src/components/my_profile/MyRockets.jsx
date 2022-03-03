import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import { cancelReservation } from '../../redux/rockets/rockets';

const MyRockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const handleCancellation = (e) => {
    dispatch(cancelReservation(+e.target.id));
  };
  return (
    <Container className="d-flex flex-column">
      <h2>My rockets</h2>
      { reservedRockets.length === 0 ? (
        <p className="border border-warning p-3 rounded-3">No rocket reserved yet!</p>
      ) : (
        <ul className="list-group">
          {
            reservedRockets.map((rocket) => (
              <li key={rocket.id} className="list-group-item d-flex justify-content-between">
                <p>{ rocket.rocketName }</p>
                <Button variant="secondary" className="opacity-50" onClick={handleCancellation} id={rocket.id}>
                  Cancel Reservation
                </Button>
              </li>
            ))
          }
        </ul>
      )}
    </Container>
  );
};

export default MyRockets;

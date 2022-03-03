import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Card, Row, Col, Button, Badge,
} from 'react-bootstrap';
import { reserveRocket, cancelReservation } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocketInfo } = props;
  const {
    id, rocketName, description, rocketImage, reserved,
  } = rocketInfo;
  const handleReserve = (e) => {
    if (!reserved) {
      dispatch(reserveRocket(+e.target.id));
    } else {
      dispatch(cancelReservation(+e.target.id));
    }
  };
  return (
    <Card className="d-flex border-0">
      <Row>
        <Col md={4}>
          <Card.Img
            src={rocketImage}
            alt="rocket"
            height="auto"
          />
        </Col>
        <Col>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{ rocketName }</Card.Title>
            <Card.Text>
              {reserved ? <Badge bg="success" className="me-2">Reserved</Badge> : ''}
              { description }
            </Card.Text>
            <Button className="align-self-start" variant={reserved ? 'outline-secondary' : 'primary'} id={id} onClick={handleReserve}>
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

Rocket.propTypes = {
  rocketInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;

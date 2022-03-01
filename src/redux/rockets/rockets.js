import axios from 'axios';

const ACTIONS = {
  INITIALIZE: 'rockets/state/initialize',
  RESERVE: 'rockets/reserve',
  CANCEL_RESERVATION: 'rockets/cancel_reservation',
};

const initializeState = () => async (dispatch) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/rockets');
  const rockets = data.map((rocket) => (
    {
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      rocketImage: rocket.flickr_images[0],
    }
  ));
  dispatch({ type: ACTIONS.INITIALIZE, payload: rockets });
};

const reserveRocket = (id) => ({
  type: ACTIONS.RESERVE,
  payload: id,
});

const cancelReservation = (id) => ({
  type: ACTIONS.CANCEL_RESERVATION,
  payload: id,
});

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.INITIALIZE:
      return action.payload;
    case ACTIONS.RESERVE:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    case ACTIONS.CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export { initializeState, reserveRocket, cancelReservation };
export default rocketsReducer;

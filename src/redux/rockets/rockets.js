import axios from 'axios';

const initialState = { loading: false, rockets: [] };

const ACTIONS = {
  START_LOADING: 'rockets/start loading',
  STOP_LOADING: 'rockets/stop loading',
  INITIALIZE: 'rockets/state/initialize',
  RESERVE: 'rockets/reserve',
  CANCEL_RESERVATION: 'rockets/cancel reservation',
};

const startLoading = () => ({
  type: ACTIONS.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS.STOP_LOADING,
});

const initializeState = () => async (dispatch) => {
  dispatch(startLoading());
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
  dispatch(stopLoading());
};

const reserveRocket = (id) => ({
  type: ACTIONS.RESERVE,
  payload: id,
});

const cancelReservation = (id) => ({
  type: ACTIONS.CANCEL_RESERVATION,
  payload: id,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.START_LOADING:
      return { ...state, loading: true };
    case ACTIONS.STOP_LOADING:
      return { ...state, loading: false };
    case ACTIONS.INITIALIZE:
      return { loading: false, rockets: action.payload };
    case ACTIONS.RESERVE:
      return (
        {
          loading: false,
          rockets: state.rockets.map((rocket) => {
            if (rocket.id === action.payload) {
              return { ...rocket, reserved: true };
            }
            return rocket;
          }),
        });
    case ACTIONS.CANCEL_RESERVATION:
      return (
        {
          loading: false,
          rockets: state.rockets.map((rocket) => {
            if (rocket.id === action.payload) {
              return { ...rocket, reserved: false };
            }
            return rocket;
          }),
        });
    default:
      return state;
  }
};

export { initializeState, reserveRocket, cancelReservation };
export default rocketsReducer;

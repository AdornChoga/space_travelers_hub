import axios from 'axios';

const ACTIONS = {
  INITIALIZE: 'rockets/state/initialize',
};

const initializeState = () => async (dispatch) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/rockets');
  const rockets = data.map((rocket) => (
    {
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
    }
  ));
  dispatch({ type: ACTIONS.INITIALIZE, payload: rockets });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.INITIALIZE:
      return action.payload;
    default:
      return state;
  }
};

export { initializeState };
export default rocketsReducer;

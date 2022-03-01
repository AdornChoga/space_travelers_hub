const ACTIONS = {
  INITIALIZE: 'rockets/state/initialize',
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.INITIALIZE:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;

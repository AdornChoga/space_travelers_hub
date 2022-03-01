const ACTIONS = {
  INITIALIZE: 'rockets/state/initialize',
};

const initializeState = (payload) => ({
  type: ACTIONS.INITIALIZE,
  payload,
});

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

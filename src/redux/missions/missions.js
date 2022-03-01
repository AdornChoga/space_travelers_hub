import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3';
const FETCH_SUCCESS = 'missions/missionsFetched';
const FETCH_FAIL = 'missions/missionsFetchFailed';

const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  try {
    const response = await axios.request({
      baseURL: BASE_URL,
      url: '/missions',
    });

    dispatch({
      type: FETCH_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FAIL,
      payload: error,
    });
  }
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...action.payload];
    case FETCH_FAIL:
      return [];
    default:
      return state;
  }
};

export default missionsReducer;

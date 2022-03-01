import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3';
const FETCH_SUCCESS = 'missions/missionsFetched';
const FETCH_FAIL = 'missions/missionsFetchFailed';
const JOIN_MISSION = 'missions/missionsJoined';
const LEAVE_MISSION = 'missions/missionsLeft';

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

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...action.payload];
    case FETCH_FAIL:
      return [];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.reserved && mission.mission_id === action.payload.id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionsReducer;

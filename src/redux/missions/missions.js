import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3';
const FETCH_SUCCESS = 'missions/missionsFetched';
const FETCH_FAIL = 'missions/missionsFetchFailed';
const JOIN_MISSION = 'missions/missionsJoined';
const LEAVE_MISSION = 'missions/missionsLeft';
const START_LOADING = 'missions/loadingStarted';
const STOP_LOADING = 'missions/loadingStoped';

const initialState = {
  loading: false,
  missions: [],
};

const startLoading = () => ({
  type: START_LOADING,
});

const stopLoading = () => ({
  type: STOP_LOADING,
});

export const fetchMissions = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await axios.request({
      baseURL: BASE_URL,
      url: '/missions',
    });

    const missions = response.data.map((mission) => (
      {
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }
    ));

    dispatch({
      type: FETCH_SUCCESS,
      payload: missions,
    });
    dispatch(stopLoading());
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
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case FETCH_SUCCESS:
      return { ...state, missions: action.payload };
    case FETCH_FAIL:
      return state;
    case JOIN_MISSION:
      return ({
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload.id) {
            return { ...mission, reserved: true };
          }
          return mission;
        }),
      });
    case LEAVE_MISSION:
      return ({
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload.id) {
            return { ...mission, reserved: false };
          }
          return mission;
        }),
      });
    default:
      return state;
  }
};

export default missionsReducer;

import ACTIONS from '../actions/actionTypes';

const initialState = {};

function setLoading (state) {
  return { ...state, loading: true}
}
function setAreas (state, action) {
  return {areasList: action.data, loading: false};
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.START_LOAD_AREAS:
      return setLoading(state);
    case ACTIONS.GET_AREAS_SUCCESS:
      return setAreas(state, action);
    default:
      return state;
  }
};

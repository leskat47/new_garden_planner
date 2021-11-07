import ACTIONS from '../actions/actionTypes';

const initialState = {};

function setAreas (state, action) {
  const areas = action.data || state.areasList;
  return {areasList: areas};
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_AREAS_SUCCESS:
      return setAreas(state, action);
    default:
      return state;
  }
};

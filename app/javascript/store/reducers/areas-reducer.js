import ACTIONS from '../actions/actionTypes';

const initialState = {};

function setAreas (state, action) {
  const areas = action.data || state.areasList;
  return {areasList: areas || []};
}

function updatePlantings (state, action) {
  // This is dreadfully inefficient. Lots of ways to rearchitect
  // if we want to scale this, but for more than my garden, we 
  // might design the app pages differently and therefore load the
  // data differently.
  const { area_id, location_id, planting } = action.data;
  const area = state.areasList.find(area => area.id === area_id)
  const location = area && area.locations.find(location => location.id === location_id)
  location && location.plantings.push(planting);
  return { areasList: state.areasList };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_AREAS_SUCCESS:
      return setAreas(state, action);
    case ACTIONS.ADD_PLANTING_SUCCESS:
      return updatePlantings(state, action);
    default:
      return state;
  }
};

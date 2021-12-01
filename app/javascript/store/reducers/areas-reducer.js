import ACTIONS from '../actions/actionTypes';

const initialState = {};

function setAreas (state, action) {
  const areas = action.data || state.areasList;
  return {areasList: areas || []};
}

function updatePlantings (state, action) {
  // This is dreadfully inefficient and gross. Lots of ways to rearchitect
  // if we want to scale this, but for more than my garden, we 
  // might design the app pages differently and therefore load the
  // data differently.
  const newState = JSON.parse(JSON.stringify(state)); 
  const { area, location_id } = action.data;
  const { id, date_planted, description, plant } = action.data;

  const stateArea = newState.areasList.find(item => item.id === area.id);
  const location = stateArea && stateArea.locations.find(location => location.id === location_id)
  location && location.plantings.push({ id, date_planted, description, plant });
  return { areasList: newState.areasList };
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

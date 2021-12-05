import ACTIONS from '../actions/actionTypes';
import normalizeData from './normalizer';

const initialState = {};

function setGarden(state, action) {
  const normalizedData = normalizeData({areas: action.data}).entities;
  return {
    areas: normalizedData.areas,
    locations: normalizedData.locations,
    plantings: normalizedData.planting
  };    
}

function updatePlantings(state, action) {
  const { id, date_planted, description, plant } = action.data;
  const newState = {
    ...state,
    plantings: { ...state.plantings }
  };
  debugger;
  newState.plantings[id.toString()] = {id, date_planted, location, plant};

  return newState;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_AREAS_SUCCESS:
      return setGarden(state, action);
    case ACTIONS.ADD_PLANTING_SUCCESS:
      return updatePlantings(state, action);  
    default:
      return state;
  }
};

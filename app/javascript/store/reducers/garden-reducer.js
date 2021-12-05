import ACTIONS from '../actions/actionTypes';
import normalizeData from './normalizer';
import produce from 'immer'

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
  const { id, date_planted, description, plant, location_id } = action.data;

  const nextState = produce(state, (draftState) => {
    draftState.locations[location_id].plantings.push(id);
    draftState.plantings[id] = {id, date_planted, description, plant};
  });

  return nextState;
}

function removePlanting(state, action) {
  const { id, locationId } = action.data;
  const nextState = produce(state, (draftState) => {
    let plantingIdx = draftState.locations[locationId].plantings.indexOf(id);
    draftState.locations[locationId].plantings.splice(plantingIdx, 1);
    delete draftState.plantings[id];
  });
  return nextState;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_AREAS_SUCCESS:
      return setGarden(state, action);
    case ACTIONS.ADD_PLANTING_SUCCESS:
      return updatePlantings(state, action);  
    case ACTIONS.REMOVE_PLANTING:
      return removePlanting(state, action);  
    default:
      return state;
  }
};

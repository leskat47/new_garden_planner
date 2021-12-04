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

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_AREAS_SUCCESS:
      return setGarden(state, action);
    default:
      return state;
  }
};

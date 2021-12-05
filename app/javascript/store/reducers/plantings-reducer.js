import ACTIONS from '../actions/actionTypes';
import normalizeData from './normalizer';

const initialState = {};

function setPlantings(state, action) {
  const plantings = normalizeData(action.data).entities.plantings;
  return {plantingsById: plantings};    
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_AREAS_SUCCESS:
      return setPlantings(state, action);
    default:
      return state;
  }
};

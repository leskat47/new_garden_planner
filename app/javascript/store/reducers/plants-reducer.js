import ACTIONS from '../actions/actionTypes';

const initialState = {};

function setPlants (state, action) {
  const plants = action.data.map(plant => {
    return {key: plant.id,
            ...plant}
  });
  return {plantList: plants};
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PLANTS_SUCCESS:
      return setPlants(state, action);
    default:
      return state;
  }
};

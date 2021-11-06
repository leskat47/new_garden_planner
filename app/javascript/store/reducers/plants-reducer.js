import ACTIONS from '../actions/actionTypes';

const initialState = {};

function setLoading (state) {
  return { ...state, loading: true}
}
function setPlants (state, action) {
  const plants = action.data.map(plant => {
    return {key: plant.id,
            ...plant}
  });
  return {plantList: plants, loading: false};
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.START_LOAD:
      return setLoading(state);
    case ACTIONS.GET_PLANTS_SUCCESS:
      return setPlants(state, action);
    default:
      return state;
  }
};

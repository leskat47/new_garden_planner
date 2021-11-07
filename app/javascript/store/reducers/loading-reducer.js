import ACTIONS from '../actions/actionTypes';

const initialState = {loading: false};

export default (state = initialState, action) => {
  const endStates = [
    ACTIONS.GET_AREAS_SUCCESS,
    ACTIONS.GET_PLANTS_SUCCESS
  ];

  if (action.type === ACTIONS.START_LOAD) {
      return { ...state, loading: true};
  }
  else if (endStates.includes(action.type)) {
      return {...state, loading: false};
  }
  else {
    return state;
  }
};

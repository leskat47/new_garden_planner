import ACTIONS from '../store/actions/actionTypes' 

const loadPlants = () => {
  const url = "api/v1/plants";
    return async dispatch => {
      dispatch({ type: ACTIONS.START_LOAD });
        const response = await fetch(url);
        const resData = await response.json();
        dispatch({ type: ACTIONS.GET_PLANTS_SUCCESS, data: resData});
    }
};

export default loadPlants;
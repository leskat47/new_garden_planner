import ACTIONS from '../store/actions/actionTypes' 

const loadPlants = (dispatch) => {
	const url = "api/v1/plants/index";
  	return async dispatch => {
	    dispatch({ type: ACTIONS.START_LOAD });
	    const response = await fetch(url);
	    const resData = await response.json();
	    dispatch({ type: ACTIONS.GET_PLANTS_SUCCESS, data: resData});
	 }
};

export default loadPlants;
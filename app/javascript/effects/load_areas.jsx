import ACTIONS from '../store/actions/actionTypes';

const loadAreas = () => {
  const url = "api/v1/areas/index";
  return async dispatch => {
    dispatch({ type: ACTIONS.START_LOAD });
    const response = await fetch(url);
    const resData = await response.json();
    dispatch({ type: ACTIONS.GET_AREAS_SUCCESS, data: resData});
  }
};

export default loadAreas;

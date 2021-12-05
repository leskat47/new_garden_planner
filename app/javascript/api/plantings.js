import routes from './routes';
import apiRequest from './api_request';

export const addPlantingRequest = (locationId) => {
  return (values, successAction) => {
    apiRequest({
      method: 'post',
      url: routes.ADD_PLANTING(locationId),
      successAction,
      body: JSON.stringify(values)});
  };
};

export const deletePlanting = ({ locationId, id, updatePlantings }) => {
  apiRequest({
    method: 'delete',
    url: routes.DELETE_PLANTING(locationId, id),
    successAction: updatePlantings });
};
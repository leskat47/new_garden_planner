import routes from './routes';
import apiRequest from './api_request';

export const addPlant = (values, successAction) => {
  apiRequest({
    method: 'post',
    url: routes.ADD_PLANT(),
    successAction,
    body: JSON.stringify(values)});
};

export const deletePlant = (id, successAction) => {
  apiRequest({
    method: 'delete',
    url: routes.DELETE_PLANT(id),
    successAction });
};

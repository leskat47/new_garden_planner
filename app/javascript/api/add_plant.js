import routes from './routes';
import { apiRequest } from './plants';

const addPlant = (values, successAction) => {
  apiRequest({
    method: 'post',
    url: routes.ADD_PLANT(),
    successAction,
    body: JSON.stringify(values)});
};

export default addPlant;
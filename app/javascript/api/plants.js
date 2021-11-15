import routes from './routes';
import { toast } from 'react-toastify';

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

const apiRequest = ({ method, url, successAction, body=null }) => {
  fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: body,
  })
  .then((data) => {
    if (data.ok) {
      return data.json()
    } else {
      throw new Error("Network error.");
    }
  })
  .then((response) => {
    if (response.error) {
      toast.error(response.error);
    }
    if (response.notice) {
      toast.success(response.notice);
    }
    successAction(response);
  })
  .catch((err) => console.log("Error: " + err));
};
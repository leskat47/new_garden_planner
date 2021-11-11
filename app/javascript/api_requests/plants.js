import routes from './routes';

export const addPlant = (values, successAction) => {
  apiRequest({
    method: 'post',
    url: routes.ADD_PLANT(),
    successAction,
    body: JSON.stringify(values)});
};

export const deletePlant = (id, successAction) => {;
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
    successAction()
    } else {
      throw new Error("Network error.");
    }
  })
  .catch((err) => message.error("Error: " + err));
};
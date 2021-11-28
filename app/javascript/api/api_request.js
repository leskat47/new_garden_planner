import { toast } from 'react-toastify';

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
  .catch((err) => {
    console.log("Error: " + err);
    toast.error('Sorry, an error occurred.')
  });
};

export default apiRequest;
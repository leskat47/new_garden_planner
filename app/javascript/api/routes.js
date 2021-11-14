const routes = {
  ADD_PLANT: () => 'api/v1/plants/create',
  DELETE_PLANT: (id) => `api/v1/plants/${id}`
};

export default routes;
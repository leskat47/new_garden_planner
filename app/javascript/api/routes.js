const routes = {
  ADD_PLANT: () => 'api/v1/plants',
  ADD_PLANTING: (locationId) => `/api/v1/locations/${locationId}/plantings`,
  DELETE_PLANT: (id) => `api/v1/plants/${id}`
};

export default routes;
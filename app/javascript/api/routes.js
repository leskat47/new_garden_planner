const apiBase = 'api/v1';

const routes = {
  ADD_PLANT: () => `${apiBase}/plants`,
  ADD_PLANTING: (locationId) => `${apiBase}/locations/${locationId}/plantings`,
  DELETE_PLANT: (id) => `${apiBase}/plants/${id}`,
  DELETE_PLANTING: (locationId, id) => 
    `${apiBase}/locations/${locationId}/plantings/${id}`
};

export default routes;
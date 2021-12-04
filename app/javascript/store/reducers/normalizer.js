import { normalize, schema } from 'normalizr';

const planting = new schema.Entity('planting');

const location = new schema.Entity('locations', {
  plantings: [planting],
});

const area = new schema.Entity('areas', {
  locations: [location],
});

const normalizeData = (sourceData) => normalize(sourceData, {areas: [area]});

export default normalizeData;
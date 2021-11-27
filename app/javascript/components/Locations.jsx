import React from 'react';
import PropTypes from 'prop-types';
import PlantTable from './plants/PlantTable';

function Locations({ locations }) {
  return (
    <div>
      { locations.map((location, i) => (
        <div key={i}>
            <h3>{location.name}</h3>
            <PlantTable plantings={location.plantings} />
          </div>
      ))}
      
    </div>
    );
}

Locations.propTypes = {
  locations: PropTypes.array
};

export default Locations;
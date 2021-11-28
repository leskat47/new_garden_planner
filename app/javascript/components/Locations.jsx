import React from 'react';
import PropTypes from 'prop-types';
import PlantTable from './plantings/PlantTable';

function Locations({ locations }) {
  return (
    <div>
      { locations.map((location, i) => (
        <div key={i}>
            <h3>{location.name}</h3>
            <PlantTable 
              plantings={location.plantings}
              locationId={location.id}
            />
          </div>
      ))}
      
    </div>
    );
}

Locations.propTypes = {
  locations: PropTypes.array
};

export default Locations;
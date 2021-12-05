import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlantTable from './plantings/PlantTable';

function Locations({ locationList, locationIds }) {
  return (
    <div>
      { locationIds && locationIds.map((id, i) => (
        <div key={i}>
            <h3>{locationList[id].name}</h3>
            <PlantTable 
              plantings={locationList[id].plantings}
              locationId={id}
            />
          </div>
      ))}
      
    </div>
    );
}

Locations.propTypes = {
  locationIds: PropTypes.array
};

function mapStateToProps(state) {
  return {
    locationList: state.garden.locations,
  }
}

export default connect(mapStateToProps)(Locations);
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import load_areas from '../effects/load_areas';
import Locations from './Locations';


function Areas({ areas, loading, dispatch }) {
  
  useEffect(() => {
    !areas && !loading && dispatch(load_areas())
  }, [areas, loading, dispatch]);

  if ( loading ) {
    return (
      <div className="loading">loading...</div>
    )
  }
  return (
    <div>
      <h1>Areas</h1>
      { areas && areas.map((area, i) => (
        <div key={i}>
            <h2>{area.name}</h2>
            <Locations locations={area.locations} />
          </div>
      ))}
    </div>
    );
}

function mapStateToProps(state) {
  return {
    areas: state.areas ? state.areas.areasList : [],
    loading: state.areas ? state.areas.loading : null
  }
}

export default connect(mapStateToProps)(Areas);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import load_areas from '../effects/load_areas';
import Locations from './Locations';
import areasSelector from '../store/selectors/areas-selector';
import loadingSelector from '../store/selectors/loading-selector';


function Areas({ areas, loading, dispatch }) {

  useEffect(() => {
    !areas.length && !loading && dispatch(load_areas())
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

Areas.propTypes = {
  areas: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    areas: areasSelector(state),
    loading: loadingSelector(state)
  }
}

export default connect(mapStateToProps)(Areas);
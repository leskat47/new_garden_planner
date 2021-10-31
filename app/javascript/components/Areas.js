import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import load_areas from '../effects/load_areas';


function Areas({ areas, loading }) {
  const dispatch = useDispatch();

  useEffect( () => { dispatch(load_areas()) }, [dispatch])
  if ( loading ) {
    return (
      <div>loading...</div>
    )
  }
  return (
    <div>
      Areas
      {areas && areas.map((area, i) => {
        return <div key={i}>{area.name}</div>
      })}
    </div>
    );
}

function mapStateToProps(state) {
  return {
    areas: state.areas ? state.areas.areasList : [],
    loading: state.areas.loading
  }
}

export default connect(mapStateToProps)(Areas);
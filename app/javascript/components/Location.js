import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppLayout from './AppLayout';

function Location({locId}) {
  const { locationId } = useParams()
	return (
    <AppLayout>
      <h1>Location</h1>
    </AppLayout>
    );
}

function mapStateToProps(state, props) {
  const {locationId, areaId} = props.match.params
  return {
    locId: locationId
  }
}

export default connect(mapStateToProps)(Location);


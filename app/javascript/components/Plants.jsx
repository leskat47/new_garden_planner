import { Table, message, Popconfirm } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppLayout from './AppLayout';
import AddPlantModal from "./AddPlantModal";
import PlantTableColumns from './PlantTableColumns';
import loadPlants from '../effects/load_plants';
import plantsSelector from '../store/selectors/plants-selector';
import loadingSelector from '../store/selectors/loading-selector';
import { deletePlant } from '../api_requests/plants'; 

function Plants({plants, loading}) {
	const dispatch = useDispatch();
	useEffect( () => {
		!plants.length && !loading && dispatch(loadPlants());
	}, [plants, dispatch]);


  const reloadPlants = () => {
    	dispatch(loadPlants());
 	};

	const columns = PlantTableColumns({
	    delete_text: 'Are you sure you want to delete this plant?',
	    onDelete: (id) => deletePlant(id, reloadPlants)
	});

  return (
    <AppLayout>
    <h1>Plants</h1>
      <Table className="table-striped-rows"
        dataSource={plants}
       	columns={columns}
        pagination={{ pageSize: 10 }} />
      <AddPlantModal reloadPlants={reloadPlants} />
    </AppLayout>
  );

};

Plants.propTypes = {
  plants: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    plants: plantsSelector(state),
    loading: loadingSelector(state)
  }
}

export default connect(mapStateToProps)(Plants);

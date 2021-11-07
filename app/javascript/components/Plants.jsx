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

function Plants({plants, loading}) {
	const dispatch = useDispatch();
	useEffect( () => {
		!plants.length && !loading && dispatch(loadPlants());
	}, [plants, dispatch]);


  	const reloadPlants = () => {
    	setPlants({ plants: [] });
    	loadPlants();
 	};

 	const deletePlant = (id) => {
	    const url = `api/v1/plants/${id}`;

	    fetch(url, {
	      method: "delete",
	    })
	      .then((data) => {
	        if (data.ok) {
	          reloadPlants();
	          return data.json();
	        }
	        throw new Error("Network error.");
	      })
      	  .catch((err) => message.error("Error: " + err));
  	};

	const columns = PlantTableColumns({
	    delete_text: 'Are you sure you want to delete this plant?',
	    onDelete: deletePlant
	});

  	return (
      <AppLayout>
        <Table className="table-striped-rows"
        	dataSource={plants}
        	columns={columns}
        	pagination={{ pageSize: 5 }} />
        <AddPlantModal reloadPlants={loadPlants} />
      </AppLayout>
    );
 	return (<div>HI</div>)

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

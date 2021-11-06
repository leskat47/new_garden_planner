import { Table, message, Popconfirm } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import AddPlantModal from "./AddPlantModal";
import PlantTableColumns from './PlantTableColumns';
import loadPlants from '../effects/load_plants';

function PPlants({plants, loading}) {
	const dispatch = useDispatch();
	useEffect( () => {
		!plants && !loading && dispatch(loadPlants());
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
      <>
        <Table className="table-striped-rows"
        	dataSource={plants}
        	columns={columns}
        	pagination={{ pageSize: 5 }} />
        <AddPlantModal reloadPlants={loadPlants} />
      </>
    );
 	return (<div>HI</div>)

};

function mapStateToProps(state) {
  return {
    plants: state.plants ? state.plants.plantList : [],
    loading: state.plants ? state.plants.loading : null
  }
}

export default connect(mapStateToProps)(PPlants);

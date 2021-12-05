import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import PlantTableColumns from '../PlantTableColumns';
import NewPlanting from './NewPlanting';
import ACTIONS from '../../store/actions/actionTypes';
import { deletePlanting } from '../../api/plantings'; 

function PlantTable({plantingIds, locationId, plantingList}) {
  const dispatch = useDispatch();
  const updatePlantings = ({ id }) => {
    dispatch({ type: ACTIONS.REMOVE_PLANTING, data: {id, locationId} });
  };

  const columns = PlantTableColumns({
    delete_text: 'Are you sure you want to delete this plant?',
    onDelete: (id) => { 
      deletePlanting({locationId, id, updatePlantings});
    }
  });

  const plantDetails = plantingIds && plantingIds.map(plantingId => {
    // TODO: We can do this parsing in the serializer. Just getting antd styling in now.
    const plant = plantingList[plantingId].plant;
    return {
      name: plant.name,
      key: plantingId,
      id: plantingId,
      exposure: plant.exposure,
      moisture: plant.moisture,
      description: plant.description
    };
  });

  return (
    <>
      <Table className="table-striped-rows"
            dataSource={plantDetails}
            columns={columns}
            pagination={{ pageSize: 5 }}
      />
      <NewPlanting
        locationId={locationId}
      />
    </>
  );
}

PlantTable.propTypes = {
  plantingIds: PropTypes.array,
  locationId: PropTypes.string,
  plantingList: PropTypes.object
}

function mapStateToProps(state) {
  return {
    plantingList: state.garden.plantings,
  }
}

export default connect(mapStateToProps)(PlantTable);

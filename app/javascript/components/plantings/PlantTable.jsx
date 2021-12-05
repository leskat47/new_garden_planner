import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import PlantTableColumns from '../PlantTableColumns';
import NewPlanting from './NewPlanting';
import PropTypes from 'prop-types';

function PlantTable({plantings, locationId, plantingList}) {
  const columns = PlantTableColumns({
    delete_text: 'Are you sure you want to delete this plant?',
    // TODO: add delete function
    onDelete: () => { console.log('delete')}
  });

  const plantDetails = plantings.map(plantingId => {
    // TODO: We can do this parsing in the serializer. Just getting antd styling in now.
    const plant = plantingList[plantingId].plant;
    return {
      name: plant.name,
      key: plantingId,
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
  plantings: PropTypes.array,
  locationId: PropTypes.number,
  plantingList: PropTypes.object
}

function mapStateToProps(state) {
  return {
    plantingList: state.garden.plantings,
  }
}

export default connect(mapStateToProps)(PlantTable);

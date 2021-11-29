import React from 'react';
import { Table } from 'antd';
import PlantTableColumns from '../PlantTableColumns';
import NewPlanting from './NewPlanting';
import PropTypes from 'prop-types';

function PlantTable({plantings, locationId}) {
  const columns = PlantTableColumns({
    delete_text: 'Are you sure you want to delete this plant?',
    // TODO: add delete function
    onDelete: () => { console.log('delete')}
  });

  const plantDetails = plantings.map(planting => {
    // TODO: We can do this parsing in the serializer. Just getting antd styling in now.
    const plant = planting.plant;
    return {
      name: plant.name,
      key: planting.id,
      exposure: plant.exposure,
      moisture: plant.moisture,
      description: plant.description
    };
  });

  const reloadPlantings = () => {
    console.log('reload');
  };

  return (
    <>
      <Table className="table-striped-rows"
            dataSource={plantDetails}
            columns={columns}
            pagination={{ pageSize: 5 }}
      />
      <NewPlanting
        reloadPlantings={reloadPlantings}
        locationId={locationId}
      />
    </>
  );
}

PlantTable.propTypes = {
  plantings: PropTypes.array
}

export default PlantTable;
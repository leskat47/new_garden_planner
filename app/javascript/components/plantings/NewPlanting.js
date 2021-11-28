import React from "react";
import PropTypes from 'prop-types';
import AddItem from '../AddItem';
import { addPlantingRequest } from '../../api/plantings';
import PlantingModal from '../modals/PlantingModal';

function NewPlanting({reloadPlantings, locationId}) {

  return (
    <AddItem
      addAction={addPlantingRequest(locationId)}
      successAction={reloadPlantings}
      buttonText="Create new planting +"
      modalForm={PlantingModal}
    />
  );
}

NewPlanting.propTypes = {
  reloadPlantings: PropTypes.func.isRequired
}

export default NewPlanting;

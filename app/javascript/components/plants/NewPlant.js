import React from "react";
import PropTypes from 'prop-types';
import AddItem from '../AddItem';
import { addPlant } from '../../api/plants';
import PlantModal from '../modals/PlantModal';

function NewPlant({reloadPlants}) {
  return (
    <AddItem
      addAction={addPlant}
      successAction={reloadPlants}
      buttonText="Create new plant +"
      modalForm={PlantModal}
    />
  );
}

NewPlant.propTypes = {
  reloadPlants: PropTypes.func.isRequired
}

export default NewPlant;

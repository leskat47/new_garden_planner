import React, { useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import AddItem from '../AddItem';
import { addPlantingRequest } from '../../api/plantings';
import PlantingModal from '../modals/PlantingModal';
import plantsSelector from '../../store/selectors/plants-selector';
import loadingSelector from '../../store/selectors/loading-selector';
import loadPlants from '../../effects/load_plants';
import ACTIONS from '../../store/actions/actionTypes';

function NewPlanting({locationId, plants, loading}) {
  const dispatch = useDispatch();
  useEffect( () => {
    !plants.length && !loading && dispatch(loadPlants());
  }, [plants, dispatch]);

  const successAction = (response) => {
    dispatch({ type: ACTIONS.ADD_PLANTING_SUCCESS, data: response});
  };

  return (
    <AddItem
      addAction={addPlantingRequest(locationId)}
      successAction={successAction}
      buttonText="Create new planting +"
      modalForm={PlantingModal}
      formOptions={ {plantOption: plants} }
    />
  );
}

NewPlanting.propTypes = {
  locationId: PropTypes.string.isRequired,
  plants: PropTypes.array,
  loading: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    plants: plantsSelector(state),
    loading: loadingSelector(state)
  }
}

export default connect(mapStateToProps)(NewPlanting);

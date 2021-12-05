import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import AppLayout from '../AppLayout';
import NewPlant from "./NewPlant";
import PlantTableColumns from '../PlantTableColumns';
import loadPlants from '../../effects/load_plants';
import plantsSelector from '../../store/selectors/plants-selector';
import loadingSelector from '../../store/selectors/loading-selector';
import { deletePlant } from '../../api/plants'; 

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
    onDelete: (id) => {
      deletePlant(id, reloadPlants, toast);
    }
  });

  return (
    <AppLayout>
    <h1>Plants</h1>
      <Table className="table-striped-rows"
        dataSource={plants}
        columns={columns}
        pagination={{ pageSize: 10 }} />
      <NewPlant reloadPlants={reloadPlants} />
    </AppLayout>
  );

}

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

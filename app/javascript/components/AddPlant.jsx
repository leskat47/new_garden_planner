import { Form, Button } from "antd";
import React, { useState } from "react";
import addPlant from '../api/add_plant';
import AddPlantModal from './AddPlantModal';

function AddPlant({reloadPlants}){
  const [ visible, setVisibility ] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values, form) => {
    const onSuccess = () => {
      handleCancel(form);
      reloadPlants();
    }
    console.log(onSuccess)
    addPlant(values, onSuccess);
  };

  const showModal = () => {
    setVisibility(true);
  };

  const handleCancel = (form) => {
    setVisibility(false);
    form.resetFields();
  };

  return (
    <>
      <Button type="primary" data-testid="add-plant" onClick={showModal}>
        Create New +
      </Button>
      <AddPlantModal onFinish={onFinish} visible={visible} handleCancel={handleCancel} form={form}/>
    </>
  );
}

export default AddPlant;
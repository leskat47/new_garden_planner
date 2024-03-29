import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button } from "antd";


function AddItem({addAction, successAction, buttonText, modalForm, formOptions}){
  const [ visible, setVisibility ] = useState(false);

  const handleFinish = (values,form) => {
    const onSuccess = (result=null) => {
      handleCancel(form);
      successAction(result);
    }
    addAction(values, onSuccess);
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
      <Button type="primary" data-testid="add-item" onClick={showModal}>
        {buttonText}
      </Button>
      { modalForm({handleFinish, handleCancel, visible, formOptions}) }
    </>
  );
}

AddItem.propTypes = {
  addAction: PropTypes.func.isRequired,
  successAction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  modalForm: PropTypes.func.isRequired,
  formOptions: PropTypes.object
};

export default AddItem;
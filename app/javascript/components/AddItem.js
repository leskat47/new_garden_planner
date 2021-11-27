import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Form, Input, Modal } from "antd";


function AddItem({addAction, successAction, buttonText, modalForm}){
  const [ visible, setVisibility ] = useState(false);

  const handleFinish = (values,form) => {
    const onSuccess = () => {
      handleCancel(form);
      successAction();
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
      { modalForm({handleFinish, handleCancel, visible}) }
    </>
  );
}

AddItem.propTypes = {
  addAction: PropTypes.func.isRequired,
  successAction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default AddItem;
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { addPlant } from '../api_requests/plants';
const { Option } = Select;

function AddPlantModal({reloadPlants}){
  const [ visible, setVisibility ] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const onSuccess = () => {
      handleCancel();
      reloadPlants();
      form.resetFields();
    }
    addPlant(values, onSuccess);
  };

  const showModal = () => {
    setVisibility(true);
  };

  const handleCancel = () => {
    setVisibility(false);
    form.resetFields();
  };

  return (
    <>
      <Button type="primary" data-testid="add-plant" onClick={showModal}>
        Create New +
      </Button>

      <Modal title="Add New Plant ..." visible={visible} data-testid='add-plant-modal' onCancel={handleCancel} footer={null}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your plant name" }]}>
            <Input placeholder="Input your plant name" />
          </Form.Item>

          <Form.Item name="exposure" label="Exposure" rules={[{ required: true, message: "Please input the sun exposure" }]}>
            <Input placeholder="Input your plant exposure" />
          </Form.Item>

          <Form.Item name="moisture" label="Moisture" rules={[{ required: true, message: "Please input the sun exposure" }]}>
            <Input placeholder="Input your plant's moisture needs" />
          </Form.Item>

          <Form.Item name="description" label="Description" rules={[{ required: true, message: "Please input a description" }]}>
            <Input  placeholder="Plant description" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddPlantModal;
import React from "react";
import PropTypes from 'prop-types';
import { Button, Form, Input, Modal } from "antd";

function PlantModal({onFinish, handleCancel, visible}){
  const [form] = Form.useForm();
  return (
      <Modal title="Add New Plant ..." visible={visible} data-testid='add-plant-modal' onCancel={() => handleCancel(form)} footer={null}>
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
            <Button type="primary" data-testid='add-plant-submit' htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
  );
}

PlantModal.propTypes = {
  onFinish: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default PlantModal;
import React from "react";
import PropTypes from 'prop-types';
import { Button, Form, Input, Modal, Select, DatePicker } from "antd";
const { Option } = Select;

function PlantingModal({handleFinish, handleCancel, visible, formOptions}){
  const [form] = Form.useForm();

  const onFinish = (values) => {
    handleFinish(values, form);
  }

  return (
      <Modal title="Add New Planting..." visible={visible} data-testid='add-plant-modal' onCancel={() => handleCancel(form)} footer={null}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="date_planted"
            label="Planting Date"
            rules={[{ required: true, message: "Please input the date planted" }]}>
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="plant_id"
            label="Plant"
            rules={[{ required: true, message: "Please input the plant name" }]}>
            <Select
              placeholder="Select plant name"
              allowClear
            >
            {formOptions.plantOption.map( plant => (
                <Option key={plant.key} value={plant.id}>{plant.name}</Option>
            ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please input a description" }]}>
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

PlantingModal.propTypes = {
  handleFinish: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  formOptions: PropTypes.object.isRequired
};

export default PlantingModal;

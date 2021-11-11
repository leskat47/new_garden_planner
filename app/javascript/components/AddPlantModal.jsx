import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

function AddPlantModal({reloadPlants}){
  const [ visible, setVisibility ] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const url = "api/v1/plants/create";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then((data) => {
      if (data.ok) {
        handleCancel();
        reloadPlants();
        form.resetFields();
      } else {
        throw new Error("Network error.");
      }
    })
    .catch((err) => console.error("Error: " + err));
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
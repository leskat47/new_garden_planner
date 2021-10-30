import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class AddPlantModal extends React.Component {
  formRef = React.createRef();
  state = {
    visible: false,
  };

  onFinish = (values) => {
    const url = "api/v1/plants/";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          this.handleCancel();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        this.props.reloadPlants();
      })
      .catch((err) => console.error("Error: " + err));
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create New +
        </Button>

        <Modal title="Add New Plant ..." visible={this.state.visible} onCancel={this.handleCancel} footer={null}>
          <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your plant name" }]}>
              <Input placeholder="Input your plant name" />
            </Form.Item>

            <Form.Item name="exposure" label="Exposure" rules={[{ required: true, message: "Please input the sun exposure" }]}>
              <Input placeholder="Input your plant exposure" />
            </Form.Item>

            <Form.Item name="moisture" label="Moisture" rules={[{ required: true, message: "Please input the sun exposure" }]}>
              <Input placeholder="Input your plant's moisture needs" />
            </Form.Item>

            <Form.Item name="description" label="Description" rules={[{ required: true, message: "Please input the quantity!" }]}>
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
}

export default AddPlantModal;
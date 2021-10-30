import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddPlantModal from "./AddPlantModal";

class Plants extends React.Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Exposure",
      dataIndex: "exposure",
      key: "exposure",
    },
    {
      title: "Moisture",
      dataIndex: "Moisture",
      key: "Moisture",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm title="Are you sure to delete this plant?" onConfirm={() => this.deletePlant(record.id)} okText="Yes" cancelText="No">
          <a href="#" type="danger">
            Delete{" "}
          </a>
        </Popconfirm>
      ),
    },
  ];

  state = {
    plants: [],
  };

  componentDidMount() {
    this.loadPlants();
  }

  loadPlants = () => {
    const url = "api/v1/plants/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        data.forEach((plant) => {
          const newEl = {
            key: plant.id,
            id: plant.id,
            name: plant.name,
            exposure: plant.exposure,
            moisture: plant.moisture,
            description: plant.description,
          };

          this.setState((prevState) => ({
            plants: [...prevState.plants, newEl],
          }));
        });
      })
      .catch((err) => message.error("Error: " + err));
  };

  reloadPlants = () => {
    this.setState({ plants: [] });
    this.loadPlants();
  };

  deletePlant = (id) => {
    const url = `api/v1/plants/${id}`;

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          this.reloadPlants();
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };

  render() {
    return (
      <>
        <Table className="table-striped-rows" dataSource={this.state.plants} columns={this.columns} pagination={{ pageSize: 5 }} />
        <AddPlantModal reloadPlants={this.reloadPlants} />
      </>
    );
  }
}

export default Plants;
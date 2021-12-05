import { Popconfirm } from "antd";
import React from "react";

function PlantTableColumns({delete_text, onDelete}) {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: "Exposure",
      dataIndex: "exposure",
      key: "exposure",
      sorter: (a, b) => a.exposure.localeCompare(b.exposure)
    },
    {
      title: "Moisture",
      dataIndex: "moisture",
      key: "moisture",
      sorter: (a, b) => a.moisture.localeCompare(b.moisture),
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
        <Popconfirm
          title={delete_text}
          onConfirm={() => onDelete(record.id)}
          okText="Yes"
          cancelText="No">
          <a href="#" type="danger">
            Delete{" "}
          </a>
        </Popconfirm>
      ),
    },
  ];
}

export default PlantTableColumns
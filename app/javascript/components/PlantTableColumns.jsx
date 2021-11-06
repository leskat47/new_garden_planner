import { Popconfirm } from "antd";
import React from "react";

function PlantTableColumns({delete_text, onDelete}) {
  return [
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
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from "antd";

const { Header } = Layout;

function AppHeader() {
  const [key, setKey] = useState("");

  const handleClick = ({ _item, key, _keyPath, _domEvent }) => {
    setKey(key);
  };
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" onClick={handleClick} defaultSelectedKeys={["/"]}>
        <Menu.Item key="/"><NavLink to="/">Garden</NavLink></Menu.Item>
        <Menu.Item key="/plants"><NavLink to="/plants">Plant Catalog</NavLink></Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
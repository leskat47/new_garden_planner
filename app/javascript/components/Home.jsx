import { Layout } from "antd";
import React from "react";
import Plants from "./Plants";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Plant Catalog</h1>
        <Plants />
      </div>
    </Content>
  </Layout>
);
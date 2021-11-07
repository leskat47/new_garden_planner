import { Layout } from "antd";
import React from "react";
import Header from "./Header";

const { Content, Footer } = Layout;

export default ({children, ...props}) => (
  <div className="layout">
    <Header />
    <Content>
      <main>
        {children}
      </main>
    </Content>
  </div>
);
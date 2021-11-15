import { Layout } from "antd";
import React from "react";
import Header from "./Header";
import { ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Content, Footer } = Layout;

export default ({children, ...props}) => (
  <div className="layout">
    <Header />
    <Content>
      <main>
        <ToastContainer 
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          transition={Slide}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </main>
    </Content>
  </div>
);
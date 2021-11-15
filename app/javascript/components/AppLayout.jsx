import { Layout } from "antd";
import React from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import { ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Content } = Layout;

const AppLayout = ({children}) => {
  return (
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
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}


export default AppLayout;
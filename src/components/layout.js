import * as React from "react";
import PropTypes from "prop-types";
import Menu from '../components/menu';
import "./layout.css";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="view">
      <Menu />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

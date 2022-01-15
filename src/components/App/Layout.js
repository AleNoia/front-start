import React from "react";
import PropTypes from "prop-types";
import Appbar from "../AppBar";

function Layout({ children }) {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;

// import React from "react";
import PropTypes from "prop-types";

function Layout({ children }) {
  return children;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

export default Layout;

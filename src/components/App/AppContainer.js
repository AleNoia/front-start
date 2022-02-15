import { React } from "react";
import PropTypes from "prop-types";
// import ReduxToastr, { toastr } from "react-redux-toastr";
// import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";
import { useSelector } from "react-redux";

function AppContainer({ children }) {
  const themeType = useSelector((store) => store.theme.type);

  return (
    <ThemeProvider theme={theme(themeType)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppContainer;

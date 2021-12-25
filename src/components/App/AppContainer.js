import React from "react";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import ReduxToastr, { toastr } from "react-redux-toastr";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";

function AppContainer({ children }) {
  // const themeType = useSelector((store) => store.theme.type);

  // const pallet = useMemo(() => themeType || "light", [themeType]);
  const pallet = "light";

  return (
    <ThemeProvider theme={theme(pallet)}>
      <CssBaseline />
      <Container maxWidth="xl">{children}</Container>
    </ThemeProvider>
  );
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

export default AppContainer;

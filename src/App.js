import React from "react";

// import { ThemeProvider } from "@material-ui/core/styles";
// import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";

import MyRoutes from "./routes";
// import Light from "./styles/themes/Light";
// import store from "./store";

export default function App() {
  return (
    // <Provider store={store}>
    // <ThemeProvider theme={Light}>
    <Router>
      {/* <CssBaseline /> */}
      <MyRoutes />
      aaa
    </Router>
    // </ThemeProvider>
    // </Provider>
  );
}

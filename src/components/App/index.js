import React from "react";

import AppContainer from "./AppContainer";
import Layout from "./Layout";
import MyRoutes from "../../routes";
import { Provider } from "react-redux";
import store from "../../store/store";

function Application() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Layout>
          <MyRoutes />
        </Layout>
      </AppContainer>
    </Provider>
  );
}

export default Application;

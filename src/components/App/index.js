import React from "react";

import AppContainer from "./AppContainer";
import Layout from "./Layout";
import MyRoutes from "../../routes";

function Application() {
  return (
    <AppContainer>
      <Layout>
        <MyRoutes />
      </Layout>
    </AppContainer>
  );
}

export default Application;

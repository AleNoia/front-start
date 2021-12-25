import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../screens/Home";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/vaga/:id" component={Vacancy} />
      <Route path="*" component={NotFound} /> */}
    </Routes>
  );
}

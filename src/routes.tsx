import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import TestifyForm from "./pages/TestifyForm";
import Testify from "./pages/Testify";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/testify-form" component={TestifyForm} />
      <Route path="/testify" component={Testify} />
    </BrowserRouter>
  );
}
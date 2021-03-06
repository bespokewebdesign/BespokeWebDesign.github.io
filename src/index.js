import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

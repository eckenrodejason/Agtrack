import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "../components/Home";
import Field from "../components/Fields/Field";
import Job from "../components/Jobs/Job";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/fields" component={Field} />
        <Route path="/jobs" component={Job} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

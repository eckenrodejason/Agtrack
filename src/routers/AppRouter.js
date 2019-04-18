import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "../components/Home";
import Field from "../components/Fields/Field";
import FieldList from "../components/Fields/FieldList";
import Job from "../components/Jobs/Job";
import JobList from "../components/Jobs/JobList";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/field/:id" component={Field} />
        <PrivateRoute path="/field-list" component={FieldList} />
        <PrivateRoute path="/job/:id" component={Job} />
        <PrivateRoute path="/job-list" component={JobList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "../components/Home";
import Field from "../components/Fields/Field";
import FieldList from "../components/Fields/FieldList";
import Job from "../components/Jobs/Job";
import JobList from "../components/Jobs/JobList";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/field/:id" component={Field} />
        <Route path="/field-list" component={FieldList} />
        <Route path="/job/:id" component={Job} />
        <Route path="/job-list" component={JobList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

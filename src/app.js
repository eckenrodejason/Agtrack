// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

//The following are imports from other classes 4/10/19
import Field from "./components/Fields/Field";
import Home from "./components/Home";
import Job from "./components/Jobs/Job";
import AppRouter from "./routers/AppRouter";
// end import of classes

ReactDOM.render(<AppRouter />, document.getElementById("app"));

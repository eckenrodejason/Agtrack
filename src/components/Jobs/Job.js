import React from "react";

const url = "user_api/v1/collection_jobs/";

// this variable is dynamic and will change via request
let id = 0;

{
  /*This const's stuff should eventually be in JobList.js */
}
const Job = props => {
  return (
    <div className="page-header">
      <div className="content-container">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Details for Job {props.match.params.id}</h1>
      </div>
    </div>
  );
};

export default Job;

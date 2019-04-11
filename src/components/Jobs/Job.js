import React from "react";

const url = "user_api/v1/collection_jobs/";

// this variable is dynamic and will change via request
let id = 0;

{
  /*This const's stuff should eventually be in JobList.js */
}
const Job = props => {
  return (
    <div>
      <header className="header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1 className="header__title">Job {props.match.params.id}</h1>
      </header>
      Showing details for the job with the id of {props.match.params.id}
    </div>
  );
};

export default Job;

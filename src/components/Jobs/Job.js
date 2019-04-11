import React from "react";

const url = "user_api/v1/collection_jobs/";

// this variable is dynamic and will change via request
let id = 0;

export default class Job extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="header__title">Jobs</h1>
        </header>
      </div>
    );
  }
}

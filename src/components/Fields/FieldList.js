import React from "react";

{
  /*THIS IS PLACEHOLDER CODE*/
}
const FieldList = props => {
  return (
    <div>
      <header className="header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1 className="header__title">Fields</h1>
      </header>
      Showing all Fields
    </div>
  );
};

export default FieldList;

{
  /* import React from "react";
import Axios from "axios";
import { unlink } from "fs";

export default class Fieldlist extends React.Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    Axios.get(`https://us.agworld.co/user_api/v1/collection_jobs/{id}`).then(
      res => {
        console.log(res);
        this.ListeningStateChangedEvent({ jobs: res.data });
      }
    );
  }

  render() {
    return (
      <ul>
        {this.UNSAFE_componentWillMount.state.jobs.map(job => (
          <li>{job.name}</li>
        ))}
      </ul>
    );
  }
}

*/
}

import react from "react";
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
    return;
    <ul>
      {this.UNSAFE_componentWillMount.state.jobs.map(job => (
        <li>{job.name}</li>
      ))}
    </ul>;
  }
}

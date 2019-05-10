import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Td from "../Td";

export default class JobList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://us.agworld.co/user_api/v1/activities?api_token=secret"
      )
      .then(response => this.setState({ title: response.data.data }));
    //this.setState({ title: response.data.data[0].attributes })
    //to render single key(title,id,body,etc) from first array in object, do title: response.data[0]
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className="home-table-title">Listing All Jobs</h2>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <Table className="home-table-layout">
            <thead>
              <tr>
                <th>Title</th>
                <th>Supervisor</th>
                <th>Job Status</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {title.map(title => {
                return (
                  <tr key={title.id}>
                    <Td to={`/job/${title.id}`}>{title.attributes.title}</Td>
                    <td>{title.attributes.author_user_name}</td>
                    <td>{title.attributes.job_status}</td>
                    <td>{title.attributes.due_at}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

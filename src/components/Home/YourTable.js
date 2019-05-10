import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Td from "../Td";

export default class HomeTable extends React.Component {
  constructor() {
    super();
    this.state = {
      title: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://us.agworld.co//user_api/v1/fields?api_token=secret"
      )
      .then(response => this.setState({ title: response.data.data }));
    //this.setState({ title: response.data.data[0].attributes })
    //to render single key(title,id,body,etc) from first array in object, do title: response.data[0]
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className="home-table-title">User Stats</h2>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <Table className="home-table-layout">
            <thead>
              <tr>
                <th />
                <th>Assigned Fields</th>
                <th>Assigned Jobs</th>
              </tr>
            </thead>
            <tbody>
              {title.map(title => {
                return (
                  <tr key={title.id}>
                    <td>{title.id}</td>
                    <td>{title.attributes.name}</td>
                    <td>{title.attributes.job_status}</td>
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

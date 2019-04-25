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
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => this.setState({ title: response.data[224] }));
    //to render single key(title,id,body,etc) from first array in object, do title: response.data[0]
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className="home-table-title">{`${title.name}'s Stats`}</h2>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <Table className="home-table-layout">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Your Fields</th>
                <th>Your Jobs</th>
              </tr>
            </thead>
            <tbody>
              <Td to={`/home`}>{title.id}</Td>
              <td>{title.email}</td>
              <Td to={`/field-list`}>{title.name}</Td>
              <Td to={`/job-list`}>{title.body}</Td>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

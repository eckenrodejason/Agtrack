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
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => this.setState({ title: response.data }));
    //to render single key(title,id,body,etc) from first array in object, do title: response.data[0]
  }
  render() {
    const { title } = this.state;
    return (
      <div className="home-table-layout table-wrapper-scroll-y my-custom-scrollbar">
        <h2 className=".home-table-title">All Field Data</h2>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Field Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {title.map(title => {
              return (
                <tr key={title.id}>
                  <Td to={`/field/${title.id}`}>{title.id}</Td>
                  <Td to={`/field/${title.id}`}>{title.title}</Td>
                  <td>{title.body}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

/*
import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Td from "../Td";
//https://us.agworld.co/user_api/v1/fields/987654?api_token=wFdJRAHjwzylncYDdwrcKw

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
        "https://us.agworld.co/user_api/v1/fields/987654?api_token=wFdJRAHjwzylncYDdwrcKw"
      )
      .then(response => this.setState({ title: response.data.data }));
    //to render single key(title,id,body,etc) from first array in object, do title: response.data[0]
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className="home-table-title">All Fields</h2>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <Table className="home-table-layout">
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
                    <Td to={`/field/${title.id}`}>{title.id}</Td>
                    <td>{title.id}</td>
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
*/
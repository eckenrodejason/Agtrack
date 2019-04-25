import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default class Home extends React.Component {
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
      <div>
        <header className="header">
          <h1 className="header-title"> Welcome to Agtrack</h1>
        </header>
        <h2 className="map-title">Map of Fields</h2>
        <div className="resp-container">
          <iframe
            className="resp-iframe"
            title="Bowles Farming Fields"
            //frameborder="0"
            //scrolling="yes"
            //marginheight="0"
            //marginwidth="0"
            //title="Bowles Farm (test)"
            src="//ucmerced.maps.arcgis.com/apps/Embed/index.html?webmap=4d5352d754c84912b5b9c4a7e293f31d&extent=-120.7789,37.0986,-120.6581,37.1513&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
          />
        </div>

        {/* everything below this works 
        <button className="button" onClick={this.handleClick}>
          Show Field ID's
        </button>
        */}
        {/*<p>{title.id}</p>*/}
        {/* below will render all id's, to render a single title,id,etc, use line above */}

        {/*}
        {title.map(title => (
          <div key={title.id}>{title.id}</div>
        ))}
      */}
        <div className="home-table-layout table-wrapper-scroll-y my-custom-scrollbar">
          <h2 className="home-table-title">All Field Data</h2>
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
                    <td>{title.id}</td>
                    <td>{title.title}</td>
                    <td>{title.body}</td>
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

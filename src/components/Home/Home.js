import React from "react";
import HomeTable from "./HomeTable";
import HomeMap from "./HomeMap";

//style={{ cursor: "pointer" }}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title"> Welcome to Agtrack</h1>
        </header>

        <h2 className="map-title">Field Map</h2>
        <HomeMap />
        <HomeTable />
        {/* 
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
      </div>
    );
  }
}

import React from "react";
import HomeTable from "./HomeTable";
import HomeMap from "./HomeMap";

//style={{ cursor: "pointer" }}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <div>
            <HomeMap />
          </div>
          <div>
            <HomeTable />
          </div>
        </div>

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

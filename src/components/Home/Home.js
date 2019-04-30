import React from "react";
import YourTable from "./YourTable";
import HomeMap from "./HomeMap";
import Test from "./Test"

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
            <YourTable />
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

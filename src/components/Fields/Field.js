import React from "react";

// get rid of characters after '=' if using 'key' constant
const url = "user_api/v1/fields?api_token=secret";

const key = "RGGynVWPBg-Frz-7E48tAA";

{
  /*This const's stuff should eventually be in FieldList.js */
}
const Field = props => {
  return (
    <div className="page-header">
      <div className="content-container">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Details for Field {props.match.params.id}</h1>
      </div>
    </div>
  );
};

export default Field;

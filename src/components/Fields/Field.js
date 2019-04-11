import React from "react";

// get rid of characters after '=' if using 'key' constant
const url = "user_api/v1/fields?api_token=RGGynVWPBg-Frz-7E48tAA";

const key = "RGGynVWPBg-Frz-7E48tAA";

{
  /*This const's stuff should eventually be in FieldList.js */
}
const Field = props => {
  return (
    <div>
      <header className="header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1 className="header__title">Field {props.match.params.id}</h1>
      </header>
      Showing details for the field with the id of {props.match.params.id}
    </div>
  );
};

export default Field;

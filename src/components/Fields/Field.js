import React from "react";

// get rid of characters after '=' if using 'key' constant
const url = "user_api/v1/fields?api_token=RGGynVWPBg-Frz-7E48tAA";

const key = "RGGynVWPBg-Frz-7E48tAA";

export default class Field extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="header__title">Fields</h1>
        </header>
      </div>
    );
  }
}

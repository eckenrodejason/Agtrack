import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="header__title"> Welcome to Agtrack</h1>
          <div class="embed-container">
            <iframe
              width="500"
              height="400"
              frameborder="0"
              scrolling="yes"
              marginheight="0"
              marginwidth="0"
              title="Bowles Farm (test)"
              src="//ucmerced.maps.arcgis.com/apps/Embed/index.html?webmap=4d5352d754c84912b5b9c4a7e293f31d&extent=-120.7789,37.0986,-120.6581,37.1513&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
            />
          </div>
        </header>
        add stuff here
      </div>
    );
  }
}

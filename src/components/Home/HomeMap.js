import React from "react";

export default class HomeMap extends React.Component {
  render() {
    return (
      <div>
        <h2 className="map-title">Field Map</h2>
        <div className="">
          <iframe
            className="map-layout"
            title="Bowles Farming Fields"
            src="//ucmerced.maps.arcgis.com/apps/Embed/index.html?webmap=4d5352d754c84912b5b9c4a7e293f31d&extent=-120.7789,37.0986,-120.6581,37.1513&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
          />
        </div>{" "}
      </div>
    );
  }
}

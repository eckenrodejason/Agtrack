import React from "react";
import axios from "axios";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      field: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://us.agworld.co/user_api/v1/fields?api_token=wFdJRAHjwzylncYDdwrcKw"
      )
      .then(response => console.log(response.data.data));
    //to render single key(title,id,body,etc) from first array in object, do title: response.data[0]
  }

  render() {
    return (
      <div>
        <p>{this.state.field}</p>
      </div>
    );
  }
}

export default Test;

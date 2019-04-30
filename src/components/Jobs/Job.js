import React from "react";
import axios from "axios";

{
  /*This const's stuff should eventually be in JobList.js */
}
class Job extends React.Component {
  constructor() {
    super();
    this.state = {
      title: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://us.agworld.co/user_api/v1/activities?api_token=wFdJRAHjwzylncYDdwrcKw"
      )
      .then(response =>
        this.setState({ title: response.data.data[1].attributes })
      );
    //this.setState({ title: response.data.data[0].attributes })
    //to render single key(title,id,body,etc) from first array in object, do title: response.data[0]

    //Details for Job ID #{this.props.match.params.id}
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Details for {title.title}</h1>
          </div>
        </div>
        <p>Company Name: {title.company_name}</p>
        <p>Total Area: {title.area}</p>
        <p>Activity Created At: {title.created_at}</p>
        <p>Activity Updated At: {title.updated_at}</p>
        <p>Water rate: {title.water_rate}</p>
        <p>Reason for activity: {title.reason_text}</p>
      </div>
    );
  }
}
export default Job;

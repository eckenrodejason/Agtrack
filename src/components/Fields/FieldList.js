import React from "react";

//import "./Post.css";

class FieldList extends React.Component {
  render() {
    return (
      <div>
        <h1>{props.title}</h1>
        <p className="Author">Author</p>
      </div>
    );
  }
}

export default FieldList;

// import React from "react";
// import axios from "axios";

// //const API_KEY = "wFdJRAHjwzylncYDdwrcKw";

// class FieldList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       guideid: []
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     axios
//       .get("https://www.ifixit.com/api/2.0/wikis/INFO?display=titles")
//       .then(response => this.setState({ guideid: response.data }));
//     //console.log("success");
//   }
//   render() {
//     return (
//       <div>
//         <header className="header">
//           {/*<img src={logo} className="App-logo" alt="logo" />*/}
//           <h1 className="header__title">Fields</h1>
//         </header>
//         <button onClick={this.handleClick}>Show Fields</button>
//         <ul>
//           <li>{this.state.guideid}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default FieldList;

// {
//   /* import React from "react";
// import Axios from "axios";
// import { unlink } from "fs";

// export default class Fieldlist extends React.Component {
//   state = {
//     jobs: []
//   };

//   componentDidMount() {
//     Axios.get(`https://us.agworld.co/user_api/v1/collection_jobs/{id}`).then(
//       res => {
//         console.log(res);
//         this.ListeningStateChangedEvent({ jobs: res.data });
//       }
//     );
//   }

//   render() {
//     return (
//       <ul>
//         {this.UNSAFE_componentWillMount.state.jobs.map(job => (
//           <li>{job.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// */
// }

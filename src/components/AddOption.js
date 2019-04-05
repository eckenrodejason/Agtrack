import React from "react";

export default class AddOption extends React.Component {
  //must bind becuase using this.props.handleAddOption inside of handleAddOption
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  } /****** */
  handleAddOption(e) {
    e.preventDefault(); //don't refresh page
    console.log("testing");
    //get info off of the form
    const option = e.target.elements.option.value.trim(); //trim gets rid of starting or trailing whitespace
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.elements.option.value = ""; //if there is no error, wipe form field to blank
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

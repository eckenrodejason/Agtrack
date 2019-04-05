import React from "react";

//Option -> Option component here
const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

//can't use in-line export default for consts, only classes
export default Option;

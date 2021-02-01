import React from "react";

function changeByHover(props) {
  return (
    <div>
      <button onMouseOver={props.handleName}>Hover {props.name}</button>
    </div>
  );
}
export default changeByHover;

import React from "react";

function Change(props) {
  const [name, changeName] = React.useState("Paulos");

  const handleName = () => changeName("Mike");
  return <div>{props.render(name, handleName)}</div>;
}

export default Change;

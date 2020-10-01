import React from "react";

const UserOutput = (props) => {
  return (
    <div style={props.style}>
      <p>Hello</p>
      <p>{props.username}</p>
    </div>
  );
};

export default UserOutput;

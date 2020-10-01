import React, { useState } from "react";
import "./App.css";
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";

function App() {
  const [userState, setUserState] = useState({
    username: "Johnny boy",
  });

  const changeUserHandler = (event) => {
    setUserState({
      username: event.target.value,
    });
  };

  const myStyle = {
    color: "green",
    font: "inherit",
    padding: "8px",
    border: "10px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <UserOutput style={myStyle} username={userState.username} />
      <UserInput changed={changeUserHandler} username={userState.username} />
      <UserOutput username="milly" />
    </div>
  );
}

export default App;

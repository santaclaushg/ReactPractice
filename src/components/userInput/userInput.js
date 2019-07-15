import React from "react";

export default function userInput({ onChangeName, username }) {
  const style = {
    border: "2px solid red"
  };
  return (
    <div>
      <input
        type="text"
        onChange={onChangeName}
        style={style}
        value={username}
      />
    </div>
  );
}

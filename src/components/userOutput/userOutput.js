import React from "react";
import * as style from "components/userOutput/userOutput.module.scss";

export default function userOutput({ username }) {
  return (
    <div className={style.userOutput}>
      <p>Some random text</p>
      <p>{username ? username : "I hope I'll be overwritten"}</p>
    </div>
  );
}

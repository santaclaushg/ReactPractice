import React from "react";
import styles from "./person.module.scss";

const person = ({ name, age, click, changed, index }) => {
  const inlineStyle = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };
  return (
    <div className={styles.person}>
      <p>
        Hi I'm a {name}. I'm {age} years old
      </p>
      <button
        className={styles.btn}
        onClick={() => click(index)}
        style={inlineStyle}
      >
        Delete
      </button>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};
export default person;

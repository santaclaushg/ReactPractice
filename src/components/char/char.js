import React from "react";

export default function char({ letter, click }) {
  const styles = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    cursor: "pointer"
  };
  return (
    <div style={styles} onClick={click} value={letter}>
      {letter}
    </div>
  );
}

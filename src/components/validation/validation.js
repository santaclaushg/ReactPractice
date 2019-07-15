import React from "react";

export default function validation({ textLength }) {
  return <div>{textLength < 5 ? "Text too short" : "Text long enough"}</div>;
}

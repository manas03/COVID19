import React from "react";
import "./Scroll.css";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid black",
        height: "800px",
        padding: "10px 15px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

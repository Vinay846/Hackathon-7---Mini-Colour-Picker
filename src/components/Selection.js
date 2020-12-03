import React, { useState } from "react";
import "./../styles/Child.css";

const Selection = (props) => {
  const [nextBackground, selectNextBackground] = useState({ background: "" });

  return (
    <div
      style={{ background: nextBackground.background }}
      className={"fix-box"}
      onClick={() => props.applyColor(selectNextBackground)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;

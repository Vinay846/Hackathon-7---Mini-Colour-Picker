import React, { useState } from "react";
import "./../styles/Child.css";

const Selection = (props) => {
    const [nextBackground, selectNextBackground] = useState({ background: "" });
    return(
        <div onClick={()=>props.applyColor(selectNextBackground)} className={"fix-box"} style={{backgroundColor: nextBackground.background}}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
}
export default Selection;

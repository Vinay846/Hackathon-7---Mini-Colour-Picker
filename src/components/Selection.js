import React, {useState} from 'react';
import '../styles/Child.css';

export default function Selection(props) {
    const [background, setBackground] = useState({background: ""});
    console.log(background);
    return(
        <div onClick={()=>props.applyColor(setBackground)} className="fix-box" style={{backgroundColor: background.background}}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
}
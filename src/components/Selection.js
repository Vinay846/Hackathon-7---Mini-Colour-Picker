import React, {useState} from 'react';
import '../styles/Child.css';

export default function Selection(props) {
    const [background, setBackground] = useState("");
    const handleclick=()=>{
        setBackground(props.applyColor().background)
    }
    return(
        <div onClick={()=>handleclick()} className="fix-box" style={{backgroundColor: background}}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
}
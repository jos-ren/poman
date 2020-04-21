import React from "react";
import "./default-text.css";

const DefaultText = ({ text, color }) => <div style={{ text: text, color:color }} className="default_text">{text}</div>

DefaultText.defaultProps = {
    text: "Hello this is some default text :)",
    color:"#404040",
}

export default DefaultText;
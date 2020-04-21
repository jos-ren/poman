import React from "react";
import "./heading-one.css";

const HeadingOne = ({ text, color }) => <div style={{ text: text, color:color }} className="heading_one">{text}</div>

HeadingOne.defaultProps = {
    text: "Welcome",
    color:"#0E7147",
}

export default HeadingOne;
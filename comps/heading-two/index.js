import React from "react";
import "./heading-two.css";

const HeadingTwo = ({ text, color }) => <div style={{ text: text, color:color }} className="heading_two">{text}</div>

HeadingTwo.defaultProps = {
    text: "SooJin",
    color:"#000000",
}

export default HeadingTwo;
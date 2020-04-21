import React from "react";
import "./heading-three.css";

const HeadingThree = ({ text, color }) => <div style={{ text: text, color:color }} className="heading_three">{text}</div>

HeadingThree.defaultProps = {
    text: "Thaibe Restaurant",
    color:"#000000",
}

export default HeadingThree;
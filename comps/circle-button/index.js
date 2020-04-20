import React from "react";
import "./circle-button.css";

const nextW = require("../../img/1x/next-w.png");
const next = require("../../img/1x/next.png");


const CircleButton = ({ width, height, backgroundColor, img, filter }) => <div
    style={{ width: width, height: height, backgroundColor: backgroundColor, filter: filter }}
    className="circle_button">
    <div className="circle_button_inner"><img src={img} /></div>
</div>

CircleButton.defaultProps = {
    width: "50px",
    height: "50px",
    backgroundColor: "#ededed",
    img: next,
    filter: "none",
}

// CircleButton.defaultProps = {
//     width: "50px",
//     height: "50px",
//     backgroundColor: "#F77821",
//     img: next,
//     filter: "none",
// }

export default CircleButton;
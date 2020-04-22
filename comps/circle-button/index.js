import React from "react";
import "./circle-button.css";

const nextW = require("../../img/icons/next-w.svg");
const next = require("../../img/icons/next.svg");
const spoonO = require("../../img/icons/spoon-o.svg");
const locateG = require("../../img/icons/locate-g.svg");
const messagesB = require("../../img/icons/messages-b.svg");
const edit = require("../../img/icons/edit.svg");



const CircleButton = ({ width, height, backgroundColor, img, filter }) => <div
    style={{ width: width, height: height, backgroundColor: backgroundColor, filter: filter }}
    className="circle_button">
    <div className="circle_button_inner"><img src={img} /></div>
</div>

CircleButton.defaultProps = {
    width: "50px",
    height: "50px",
    backgroundColor: "#ffffff",
    img: edit,
    filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2))",
}

export default CircleButton;
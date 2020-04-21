import React from "react";
import "./circle-button.css";

const nextW = require("../../img/icons/1x/next-w.png");
const next = require("../../img/icons/1x/next.png");
const spoonO = require("../../img/icons/1x/spoon-o.png");
const locateG = require("../../img/icons/1x/locate-g.png");
const messagesB = require("../../img/icons/1x/messages-b.png");
const edit = require("../../img/icons/1x/edit.png");



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
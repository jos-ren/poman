import React from "react";
import "./icon.css";

const settings = require("../../img/icons/settings.svg");
const pin = require("../../img/icons/pin.svg");
const pinG = require("../../img/icons/pin-g.svg");


const Icon = ({ width, height, img}) => <div
    style={{ width: width, height: height}}
    className="icon">
    <img src={img} />
</div>

Icon.defaultProps = {
    width: "50px",
    height: "50px",
    img: settings,
}

export default Icon;
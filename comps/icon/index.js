import React from "react";
import "./icon.css";

const settings = require("../../img/icons/1x/settings.png");
const pin = require("../../img/icons/1x/pin.png");
const pinG = require("../../img/icons/1x/pin-g.png");


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
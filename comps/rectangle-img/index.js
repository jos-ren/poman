import React from "react";
import "./rectangle-img.css";

const profile1 = require("../../img/profiles/profile1.png");
const profile2 = require("../../img/profiles/profile2.png");
const profile3 = require("../../img/profiles/profile3.png");
const profile4 = require("../../img/profiles/profile4.png");
const profile5 = require("../../img/profiles/profile5.png");
const profile6 = require("../../img/profiles/profile6.png");
const profile7 = require("../../img/profiles/profile7.png");
const profile8 = require("../../img/profiles/profile8.png");
const profile9 = require("../../img/profiles/profile9.png");
const profile10 = require("../../img/profiles/profile10.png");
const profile11 = require("../../img/profiles/profile11.png");
const profile12 = require("../../img/profiles/profile12.png");
const profile13 = require("../../img/profiles/profile13.png");
const profile14 = require("../../img/profiles/profile14.png");
const profile15 = require("../../img/profiles/profile15.png");
const profile16 = require("../../img/profiles/profile16.png");
const profile17 = require("../../img/profiles/profile17.png");
const profile18 = require("../../img/profiles/profile18.png");
const profile19 = require("../../img/profiles/profile19.png");
const profile20 = require("../../img/profiles/profile20.png");
const profile21 = require("../../img/profiles/profile21.png");
const profile22 = require("../../img/profiles/profile22.png");
const profile23 = require("../../img/profiles/profile23.png");
const profile24 = require("../../img/profiles/profile24.png");

const RectangleImg = ({ width, height, img }) => <div
    style={{ width: width, height: height, img: img }}
    className="rectangle_img">
    <div className="rectangle_img_inner"><img src={img} /></div>
</div>

RectangleImg.defaultProps = {
    width: "116px",
    height: "116px",
    img: profile1,
}

export default RectangleImg;
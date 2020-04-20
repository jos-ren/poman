import React from "react";
import "./food-icon.css";

const icon1 = require("../../img/food-icons/japanese.png");


const FoodIcon = ({ width, height, img, text }) => <div
    style={{ width: width, height: height, img: img, text:text }}
    className="food-icon">
    <div className="food-icon-img" ><img src={img} /></div>
    <div className="food-icon-text">{text}</div>
</div>

FoodIcon.defaultProps = {
    width: "116px",
    height: "116px",
    img: icon1,
}

export default FoodIcon;
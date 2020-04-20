import React from "react";
import "./slider.css";

const po = require("../../img/1x/po-g.png");

const Slider = ({ textRight, textLeft,width, backgroundColor, onClick, }) =>
    <div style={{textRight:textRight, textLeft:textLeft, width: width, backgroundColor: backgroundColor}} className="slider" onClick={onClick}>

        <div className="slider_inner slider_inner_left">{textLeft}</div>
        <div className="slider_inner slider_inner_right">{textRight}</div>
    </div>

Slider.defaultProps = {
    width: "300px",
    backgroundColor: "#6988F2",
    textLeft:"Message",
    textRight:"Spoons",
}

export default Slider;
import React from "react";
import "./progress-bar.css";

const dotG = require("../../img/icons/circle-g.svg");
const dotL = require("../../img/icons/circle-l.svg");
const form = require("../../img/icons/circle-form.svg");
const food = require("../../img/icons/circle-food.svg");
const style = require("../../img/icons/circle-style.svg");
const bio = require("../../img/icons/circle-bio.svg");
const camera = require("../../img/icons/circle-camera.svg");
const spoon = require("../../img/icons/circle-spoon.svg");
const social = require("../../img/icons/circle-social.svg");
const location = require("../../img/icons/circle-location.svg");
const verification = require("../../img/icons/circle-verification.svg");
const confirmation = require("../../img/icons/circle-confirmation.svg");


const ProgressBar = ({ width, color, backgroundColor, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 }) =>
    <div style={{ width: width, color: color, backgroundColor: backgroundColor, img1: img1, img2: img2, img3: img3, img4: img4, img5: img5, img6: img6, img7: img7, img8: img8, img9: img9, img10: img10 }} className="progress_bar">
        <div className="progress_bar_inner"><img src={img1} /></div>
        <div className="progress_bar_inner"><img src={img2} /></div>
        <div className="progress_bar_inner"><img src={img3} /></div>
        <div className="progress_bar_inner"><img src={img4} /></div>
        <div className="progress_bar_inner"><img src={img5} /></div>
        <div className="progress_bar_inner"><img src={img6} /></div>
        <div className="progress_bar_inner"><img src={img7} /></div>
        <div className="progress_bar_inner"><img src={img8} /></div>
        <div className="progress_bar_inner"><img src={img9} /></div>
        <div className="progress_bar_inner"><img src={img10} /></div>
    </div>

ProgressBar.defaultProps = {
    text: "Search here...",
    width: "360px",
    backgroundColor: "#ffffff",
    img1: dotG,
    img2: dotG, 
    img3: dotG, 
    img4: dotG, 
    img5: dotG,
    img6: dotG,
    img7: dotG, 
    img8: dotG, 
    img9: verification, 
    img10: dotL,
}

export default ProgressBar;
import React from "react";
import "./progress-bar.css";

const dotG = require("../../img/icons/1x/circle-g.png");
const dotL = require("../../img/icons/1x/circle-l.png");
const form = require("../../img/icons/1x/circle-form.png");
const food = require("../../img/icons/1x/circle-food.png");
const style = require("../../img/icons/1x/circle-style.png");
const bio = require("../../img/icons/1x/circle-bio.png");
const camera = require("../../img/icons/1x/circle-camera.png");
const spoon = require("../../img/icons/1x/circle-spoon.png");
const social = require("../../img/icons/1x/circle-social.png");
const location = require("../../img/icons/1x/circle-location.png");
const verification = require("../../img/icons/1x/circle-verification.png");
const confirmation = require("../../img/icons/1x/circle-confirmation.png");


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
    width: "330px",
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
import React from "react";
import "./message-bar.css";

const camera = require("../../img/icons/camera-b.svg");
const emoji = require("../../img/icons/emoji-b.svg");
const gallery = require("../../img/icons/gallery-b.svg");
const send = require("../../img/icons/send-b.svg");


const MessageBar = ({ width, icon1, icon2, icon3, icon4 }) => <div style={{ width: width, icon1:icon1, icon2:icon2, icon3:icon3, icon4:icon4}} className="message_bar">
    <div className="message_bar_icon" ><img src={icon1} /></div>
    <div className="message_bar_icon" ><img src={icon2} /></div>
    <div className="message_bar_icon" ><img src={icon3} /></div>
    <input placeholder="Aa" className="search_bar_input"></input>
    <div className="message_bar_icon" ><img src={icon4} /></div>

</div>
MessageBar.defaultProps = {
    width: "350px",
    icon1: emoji,
    icon2: camera,
    icon3: gallery,
    icon4: send,
}

export default MessageBar;

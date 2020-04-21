import React from "react";
import "./message-bar.css";

const camera = require("../../img/icons/1x/camera-b.png");
const emoji = require("../../img/icons/1x/emoji-b.png");
const gallery = require("../../img/icons/1x/gallery-b.png");
const send = require("../../img/icons/1x/send-b.png");


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

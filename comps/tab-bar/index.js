import React from "react";
import "./tab-bar.css";

const po = require("../../img/icons/1x/po-g.png");
const browse = require("../../img/icons/1x/browse-o.png");
const messages = require("../../img/icons/1x/messages-b.png");
const profile = require("../../img/icons/1x/profile-r.png");
const poUnselected = require("../../img/icons/1x/po-l.png");
const browseUnselected = require("../../img/icons/1x/browse-l.png");
const messagesUnselected = require("../../img/icons/1x/messages-l.png");
const profileUnselected = require("../../img/icons/1x/profile-l.png");

const TabBar = ({ width, backgroundColor, onClick, po, browse, messages, profile }) =>
    <div style={{ width: width, backgroundColor: backgroundColor, po:po, browse:browse, messages: messages, profile:profile,  }} className="tab_bar" onClick={onClick}>

        <div className="tab_bar_inner"><img src={po} /></div>
        <div className="tab_bar_inner"><img src={browse} /></div>
        <div className="tab_bar_inner"><img src={messages} /></div>
        <div className="tab_bar_inner"><img src={profile} /></div>

    </div>

TabBar.defaultProps = {
    width: "350px",
    backgroundColor: "#ffffff",
    po:po,
    browse:browseUnselected,
    messages:messagesUnselected,
    profile:profileUnselected,
}

export default TabBar;
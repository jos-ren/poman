import React from "react";
import "./tab-bar.css";
import Notification from "../../comps/notification";

const po = require("../../img/icons/po-g.svg");
const browse = require("../../img/icons/browse-o.svg");
const messages = require("../../img/icons/messages-b.svg");
const profile = require("../../img/icons/profile-r.svg");
const poUnselected = require("../../img/icons/po-l.svg");
const browseUnselected = require("../../img/icons/browse-l.svg");
const messagesUnselected = require("../../img/icons/messages-l.svg");
const profileUnselected = require("../../img/icons/profile-l.svg");

const TabBar = ({ width, backgroundColor, onClick, po, browse, messages, profile }) =>
    <div style={{ width: width, backgroundColor: backgroundColor, po:po, browse:browse, messages: messages, profile:profile,  }} className="tab_bar" onClick={onClick}>

        <div className="tab_bar_inner"><img src={po} /></div>
        <div className="tab_bar_inner"><img src={browse} /></div>
        <div className="tab_bar_inner"><img src={messages} /></div>
        <div className="tab_bar_inner"><img src={profile} /></div>
        <div className="tab_bar_notification"><Notification text="21"/></div>

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
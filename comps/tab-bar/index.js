import React from "react";
import "./tab-bar.css";

const po = require("../../img/1x/po.png");
const browseUnselected = require("../../img/1x/browse-grey.png");
const messagesUnselected = require("../../img/1x/messages-grey.png");
const profileUnselected = require("../../img/1x/profile-grey.png");

const TabBar = ({ width, backgroundColor, onClick }) =>
    <div style={{ width: width, backgroundColor: backgroundColor }} className="tab_bar" onClick={onClick}>

        <div className="tab_bar_po tab_bar_inner"><img src={po} /></div>
        <div className="tab_bar_browse tab_bar_inner"><img src={browseUnselected} /></div>
        <div className="tab_bar_message tab_bar_inner"><img src={messagesUnselected} /></div>
        <div className="tab_bar_profile tab_bar_inner"><img src={profileUnselected} /></div>

    </div>

TabBar.defaultProps = {
    width: "350px",
    backgroundColor: "#ffffff",
    img: { po }
}

export default TabBar;
import React from "react";
import "./notification.css";

const Notification = ({ width, height, backgroundColor, text, color }) => <div
    style={{ width: width, height: height, backgroundColor: backgroundColor, text: text, color: color }}
    className="notification">
    {text}
</div>

Notification.defaultProps = {
    color: "#FFFFFF",
    width: "10px",
    height: "10px",
    backgroundColor: "#6988F2",
    text: "",
}

export default Notification;
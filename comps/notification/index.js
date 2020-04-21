import React from "react";
import "./notification.css";

const Notification = ({ width, height, backgroundColor, text, color }) => <div
    style={{ width: width, height: height, backgroundColor: backgroundColor, text: text, color: color }}
    className="notification">
    {text}
</div>

Notification.defaultProps = {
    color: "#FFFFFF",
    width: "15px",
    height: "15px",
    backgroundColor: "#FD401D",
    text: "66",
}

export default Notification;
import React from "react";
import "./message-box.css";

const MessageBox = ({ text, width, color, backgroundColor, onClick }) => <div
    style={{ width: width, color: color, backgroundColor: backgroundColor }}
    className="message_box"
    onClick={onClick}>
    <div className="message_box_inner">
        {text}
    </div>
</div>

MessageBox.defaultProps = {
    text: "Button",
    width: "150px",
    color: "#ededed",
    backgroundColor: "#167048",
}

export default MessageBox;
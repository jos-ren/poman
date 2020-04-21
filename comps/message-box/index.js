import React from "react";
import "./message-box.css";

const MessageBox = ({ text, width, color, backgroundColor}) => <div
    style={{ width: width, color: color, backgroundColor: backgroundColor, text:text}}
    className="message_box">
    <div className="message_box_inner">
        {text}
    </div>
</div>

MessageBox.defaultProps = {
    width: "auto",
    text: "Hi i'm replying to you :)",
    color: "#404040",
    backgroundColor: "#ededed",
}

export default MessageBox;
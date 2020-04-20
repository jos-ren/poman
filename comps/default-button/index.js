import React from "react";
import "./default-button.css";

const DefaultButton = ({ text, width, color, backgroundColor, onClick }) => <div
    style={{ width: width, color: color, backgroundColor: backgroundColor }}
    className="button_box"
    onClick={onClick}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>

DefaultButton.defaultProps = {
    text: "Button",
    width: "150px",
    color: "#ffffff",
    backgroundColor: "#167048",
}

export default DefaultButton;
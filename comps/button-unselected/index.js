import React from "react";
import "./button-unselected.css";

const ButtonUnselected = ({ text, width, color, backgroundColor, onClick }) => <div
    style={{ width: width, color: color, backgroundColor: backgroundColor }}
    className="button_box"
    onClick={onClick}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>

ButtonUnselected.defaultProps = {
    text: "Button",
    width: "150px",
    color: "#000000",
    backgroundColor: "#ededed",
}

export default ButtonUnselected;
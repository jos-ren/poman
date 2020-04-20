import React from "react";
import "./profile-img.css";

const profile1 = require("../../img/profiles/profile3.png");

const ProfileImg = ({width, img}) => <div
    style={{ width: width, img:img}}
    className="profile-img">
        <img src={img} />
</div>

ProfileImg.defaultProps = {
    width: "150px",
    img:profile1,
}

export default ProfileImg;
import React from "react";
import "./food-icon.css";

const icon1 = require("../../img/food-icons/bakery.png");
const icon2 = require("../../img/food-icons/bbq.png");
const icon3 = require("../../img/food-icons/breakfast.png");
const icon4 = require("../../img/food-icons/burger.png");
const icon5 = require("../../img/food-icons/chicken.png");
const icon6 = require("../../img/food-icons/chinese.png");
const icon7 = require("../../img/food-icons/coffee.png");
const icon8 = require("../../img/food-icons/desserts.png");
const icon9 = require("../../img/food-icons/dumplings.png");
const icon10 = require("../../img/food-icons/fish-and-chips.png");
const icon11 = require("../../img/food-icons/greek.png");
const icon12 = require("../../img/food-icons/healthy.png");
const icon13 = require("../../img/food-icons/icecream.png");
const icon14 = require("../../img/food-icons/italian.png");
const icon15 = require("../../img/food-icons/japanese.png");
const icon16 = require("../../img/food-icons/mexican.png");
const icon17 = require("../../img/food-icons/pizza.png");
const icon18 = require("../../img/food-icons/pub-food.png");
const icon19 = require("../../img/food-icons/ramen.png");
const icon20 = require("../../img/food-icons/sandwich.png");
const icon21 = require("../../img/food-icons/sea-food.png");
const icon22 = require("../../img/food-icons/smoothie.png");
const icon23 = require("../../img/food-icons/soup.png");
const icon24 = require("../../img/food-icons/spicy.png");
const icon25 = require("../../img/food-icons/sushi.png");
const icon26 = require("../../img/food-icons/tacos.png");
const icon27 = require("../../img/food-icons/thai.png");
const icon28 = require("../../img/food-icons/vegan.png");


const FoodIcon = ({ width, height, img, text }) => <div
    style={{ width: width, height: height, img: img, text: text }}
    className="food_icon">
        <div className="food_icon_img" ><img src={img} /></div>
        <div className="food_icon_text">{text}</div>
</div>

FoodIcon.defaultProps = {
    width: "87.5px",
    height: "87.5px",
    img: icon24,
    text:"Spicy"
}

export default FoodIcon;
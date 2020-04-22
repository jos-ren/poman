import React from "react";
import "./food-icon.css";

const icon1 = require("../../img/food-icons/bakery.svg");
const icon2 = require("../../img/food-icons/bbq.svg");
const icon3 = require("../../img/food-icons/breakfast.svg");
const icon4 = require("../../img/food-icons/burger.svg");
const icon5 = require("../../img/food-icons/chicken.svg");
const icon6 = require("../../img/food-icons/chinese.svg");
const icon7 = require("../../img/food-icons/coffee.svg");
const icon8 = require("../../img/food-icons/desserts.svg");
const icon9 = require("../../img/food-icons/dumplings.svg");
const icon10 = require("../../img/food-icons/fish-and-chips.svg");
const icon11 = require("../../img/food-icons/kebab.svg");
const icon12 = require("../../img/food-icons/healthy.svg");
const icon13 = require("../../img/food-icons/icecream.svg");
const icon14 = require("../../img/food-icons/italian.svg");
const icon15 = require("../../img/food-icons/japanese.svg");
const icon16 = require("../../img/food-icons/egg.svg");
const icon17 = require("../../img/food-icons/pizza.svg");
const icon18 = require("../../img/food-icons/beer.svg");
const icon19 = require("../../img/food-icons/ramen.svg");
const icon20 = require("../../img/food-icons/sandwich.svg");
const icon21 = require("../../img/food-icons/sea-food.svg");
const icon22 = require("../../img/food-icons/smoothie.svg");
const icon23 = require("../../img/food-icons/soup.svg");
const icon24 = require("../../img/food-icons/spicy.svg");
const icon25 = require("../../img/food-icons/sushi.svg");
const icon26 = require("../../img/food-icons/tacos.svg");
const icon27 = require("../../img/food-icons/thai.svg");
const icon28 = require("../../img/food-icons/vegan.svg");


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
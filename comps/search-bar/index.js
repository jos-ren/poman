import React from "react";
import "./search-bar.css";

const search = require("../../img/icons/1x/search-g.png");


const SearchBar = ({ width, img }) => <div style={{ width: width }} className="search_bar">

    <input placeholder="Explore good food..." className="search_bar_input"></input>
    <div className="search_bar_icon" ><img src={img} /></div>

</div>
SearchBar.defaultProps = {
    width: "350px",
    img: search,
}

export default SearchBar;





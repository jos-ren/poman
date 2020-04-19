import React from "react";
import "./search-bar.css";

const defaultImg = require("../../img/1x/searchmdpi.png");

const SearchBar = ({ text, width, color, backgroundColor, onClick, img }) => <div
    style={{ width: width, color: color, backgroundColor: backgroundColor }}
    className="search_bar"
    onClick={onClick}
>
    <div className="search_bar_inner">
        {text}
    </div>
    <div className="search_icon">
        <img src={img} />
    </div>
</div>

SearchBar.defaultProps = {
    text: "Search here...",
    width: "350px",
    color: "#707070",
    backgroundColor: "#ffffff",
    img: defaultImg,
}

export default SearchBar;

const Input = ({ placeholder, onClick}) => {

    const [val, setVal] = useState("");

    return <div className="input_cont">
        <input onChange={(e) => {
            setVal(e.target.value);
        }} type="text" placeholder={placeholder} />
        <CustomButton onClick={()=>{
            onClick(val);
        }} text="Send" color="#00c7ff"
        />
    </div>;
}

Input.defaultProps = {
    placeholder: "Type your chat here...",
    onClick:()=>{}
}
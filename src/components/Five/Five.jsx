import "./five.css";
import SLIDE from "../img/cart 1.png";
import SLIDE2 from "../img/cart 2.png";
import SLIDE3 from "../img/cart 3.png";
import SLIDE4 from "../img/cart 4.png";
import SLIDE5 from "../img/cart 5.png";
import React from "react";

const Five = () => {
  return <div className="five">
    <p className="season">Your Day-to-day</p>
    <div className="slide-head">Skincare <br />
    Ritual
    </div>
    <div className="items">
        <div className="entry">
            <img src={SLIDE} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE2} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE3} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE4} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE5} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE2} alt="" className="slide" />
        </div>
    </div>
  </div>;
};

export default Five;

import "./second.css";
import FACE from "../img/mode 2.png";
import FACE2 from "../img/mode 1.png";
import SEAS from "../img/sea 2.png";
import SEAS2 from "../img/sea 1.png";
import React from "react";

const Second = () => {
  return <div className="second">
    <p className="tagline">Radiate beauty through every season.</p>
    <div className="about-head">Elixirs from <br />
    Velorea
    </div>
    <p className="about-des">
        Winter and summer each call for unique care<br />
        and our products are crafted to deliver<br />
        the perfect blend of vitamins for every season.<br />
        Experience the art of seasonal skincare with<br />
        our luxurious formulas, ensuring your skin<br />
        remains radiant and vibrant throughout the year.
    </p>
    <img src={SEAS} alt="" className="face-three" />
    <img src={SEAS2} alt="" className="face-four" />
    <img src={FACE} alt="" className="face-one" />
    <img src={FACE2} alt="" className="face-two" />
  </div>;
};

export default Second;

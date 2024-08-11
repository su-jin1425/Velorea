import "./six.css";
import HOV from "../img/bottle 1.png";
import HOV2 from "../img/botte 2.png";
import HOV3 from "../img/botte 3.png";
import React from "react";

const Six = () => {
  return <div className="six">
    <div className="tag-one">Exfoliant Gel</div>
    <div className="hover">
        <img src={HOV} alt="" className="hover-pic" />
    </div>
    <div className="tag-two">Hydrating Sunscreen</div>
    <div className="hover-two">
        <img src={HOV2} alt="" className="hover-pic" />
    </div>
    <div className="tag-three">Facial Moisturizer</div>
    <div className="hover-three">
        <img src={HOV3} alt="" className="hover-pic" />
    </div>
    <a href="https://shoot-the-breeze.vercel.app/" className="myButton-two">Shop all</a>
  </div>;
};

export default Six;

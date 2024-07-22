import "./four.css";
import H1 from "../img/high 1.svg";
import H2 from "../img/high 2.svg";
import H3 from "../img/high 3.svg";
import React from "react";

const Four = () => {
  return <div className="four">
    <p className="text-drop">
        Your skin reacts differently <img src={H1} alt="" className="high" /> according to every season, <br />
        in the Year <img src={H2} alt="" className="high" /> of Spring, Summer, and Winter<br />
        your skin tends to start drying a bit easier. so we offer a <br />
        selection of essential skincare <img src={H3} alt="" className="high" /> products for your <br />
        morning and night routines to keep your skin perfect.
    </p>
  </div>;
};

export default Four;

import "./seven.css";
import COVER from "../img/mix.png";
import React from "react";

const Seven = () => {
  return <div className="seven">
    <div className="cover-drop">
        <div className="ingr-head">Natural <br />
        Ingredients
        </div>
        <p className="ingr-about">
        At Pure Essence, we pride ourselves on using 100% natural ingredients, transparently<br />
        sourced from the Himalayan Mountains, Norwegian Woods, and Mediterranean Coast.<br />
        This blend of high-altitude purity and coastal richness ensures our products<br />
        deliver exceptional quality and balance, catering to warm nurturing climates.<br />
        <br />
        Here's a list of all ingredients that we using on our product. 
        </p>
        <table>
            <tbody>
                <tr>
            <td>Hydrating Serum</td>
            <td>Himalayan Mountains</td>
            <td className="change">Mountain Spring Water</td>
        </tr>
        <tr>
            <td>Forest Infusion</td>
            <td>Norwegian Woods</td>
            <td className="change">Pine Needle Extract</td>
        </tr>
        <tr>
            <td>Essential Oils</td>
            <td>Mediterranean Coast</td>
            <td className="change">Olive Oil Essence</td>
        </tr>
        <tr>
            <td>Vitamins</td>
            <td>--</td>
            <td className="change">Vitamin C Complex</td>
        </tr>
        <tr>
            <td>Mineral Crystals</td>
            <td>Andean Peaks</td>
            <td className="change">Pink Himalayan Salt</td>
        </tr>
        <tr>
            <td>Herbal Extracts</td>
            <td>Alpine Meadows</td>
            <td className="change">Edelweiss Extract</td>
        </tr>
        <tr>
            <td>Botanical Oils</td>
            <td>Andean Highlands</td>
            <td className="change">Llama Fruit Oil</td>
        </tr>
        <tr>
            <td>Seed Extracts</td>
            <td>Andean Highlands</td>
            <td className="change">Quinoa Seed Oil</td>
        </tr>
        <tr>
            <td>Wood Extracts</td>
            <td>Scandinavian Forests</td>
            <td className="change">Birchwood Essence</td>
        </tr>
        <tr>
            <td>Floral Extracts</td>
            <td>Scandinavian Forests</td>
            <td className="change">Wild Rose Extract</td>
        </tr>
        <tr>
            <td>Fruit Infusion</td>
            <td>Scandinavian Forests</td>
            <td className="change">Heather Blossom</td>
        </tr>
        <tr>
            <td>Herbal Infusion</td>
            <td>Scandinavian Forests</td>
            <td className="change">Juniper Berry</td>
        </tr>
        <tr>
            <td>Root Extracts</td>
            <td>Scandinavian Forests</td>
            <td className="change">Ginger Root Essence</td>
        </tr>
        <tr>
            <td>Leaf Extracts</td>
            <td>Scandinavian Forests</td>
            <td className="change">Mint Leaf Oil</td>
        </tr>
        <tr>
            <td>Tree Extracts</td>
            <td>Scandinavian Forests</td>
            <td className="change">Oakwood Essence</td>
        </tr>
        <tr>
            <td>Berry Extracts</td>
            <td>Scandinavian Forests</td>
            <td className="change">Lingonberry Extract</td>
        </tr>
        </tbody>
        </table>
        <img src={COVER} alt="" className="cover-pic" />
    </div>
  </div>;
};

export default Seven;

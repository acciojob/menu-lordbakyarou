import React from "react";
import Food from "./Food";

const Menu = () => {
  return (
    <div>
      <h1>Our Menu</h1>
      <ul>
        <li>All</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Shakes</li>
      </ul>
      <div className="menu">
        <Food />
      </div>
    </div>
  );
};

export default Menu;

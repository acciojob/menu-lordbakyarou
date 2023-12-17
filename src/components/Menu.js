import React, { useState } from "react";
import Food from "./Food";
import data from "../data/data";

const Menu = () => {
  const [updatedData, setUpdatedData] = useState(data);

  const [currentField, setCurrentField] = useState("All");

  function setField(event) {
    console.log(event.target.id);

    setUpdatedData(
      data.filter((item) => {
        if (event.target.id === "all") return item;
        return item.category === event.target.id;
      })
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ color: "#102a42", fontWeight: 700 }}>Our Menu</h1>
      <div
        style={{
          width: "80px",
          border: "2px solid #c59d5f",
          alignItems: "center",
          alignSelf: "center",
          marginTop: "-10px",
        }}
      ></div>
      <ul>
        <li id="all" onClick={() => setField(event)}>
          All
        </li>
        <li id="breakfast" onClick={() => setField(event)}>
          Breakfast
        </li>
        <li id="lunch" onClick={() => setField(event)}>
          Lunch
        </li>
        <li id="shakes" onClick={() => setField(event)}>
          Shakes
        </li>
      </ul>
      <div className="menu">
        <Food data={updatedData} />
      </div>
    </div>
  );
};

export default Menu;

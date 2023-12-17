import React, { useState } from "react";
import Food from "./Food";
import data from "../data/data";

const Menu = () => {
  const [updatedData, setUpdatedData] = useState(data);

  const [currentField, setCurrentField] = useState("All");

  function setField(event) {
    // console.log(event.target.id);

    setUpdatedData(
      data.filter((item) => {
        if (event === "all") return item;
        return item.category === event;
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
        <li id="main" onClick={() => setField("all")}>
          All
        </li>
        <li
          id="filter-btn-1"
          data-test-id="menu-item-breakfast"
          onClick={() => setField("breakfast")}
        >
          Breakfast
        </li>
        <li
          id="filter-btn-2"
          data-test-id="menu-item-lunch"
          onClick={() => setField("lunch")}
        >
          Lunch
        </li>
        <li
          id="filter-btn-3"
          data-test-id="menu-item-shakes"
          onClick={() => setField("shakes")}
        >
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

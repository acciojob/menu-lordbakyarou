import React from "react";

import data from "../data/data";

import "../styles/App.css";

const Food = () => {
  return (
    <div className="menu-items">
      {data.map((item) => {
        return (
          <div className="item">
            <img
              src={item.img}
              style={{
                width: "300px",
                height: "200px",
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                objectFit: "cover",
              }}
            />
            <div className="item-desc">
              <div className="item-header">
                <h1>{item.title}</h1>
                <h2>$ {item.price}</h2>
              </div>
              <hr />
              <div>
                <h1>{item.desc}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Food;

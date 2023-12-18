import React from "react";

import "../styles/App.css";

const Food = ({ data, currentField }) => {
  const testId = `menu-items-${currentField}`;
  return (
    <div className="menu-items">
      {data.map((item) => {
        return (
          <div className="item" data-test-id={testId}>
            <div className="image-container">
              <img
                src={item.img}
                style={{
                  width: "300px",
                  height: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              />
            </div>
            <div className="item-desc">
              <div className="item-header">
                <h1>{item.title}</h1>
                <h2>$ {item.price}</h2>
              </div>
              <hr />
              <div className="border"></div>
              <div className="item-description">
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

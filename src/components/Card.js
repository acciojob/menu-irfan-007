import React from "react";

function Card({ obj }) {
  return (
    <div className="card" data-test-id={`menu-item-${obj.category}`}>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="info">
        <div className="info-head">
          <div className="title">{obj.title}</div>{" "}
          <div className="price">{obj.price}</div>{" "}
        </div>
        <div className="description">{obj.desc}</div>
      </div>
    </div>
  );
}

export default Card;

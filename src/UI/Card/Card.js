import React from "react";
import "./card.scss";

const Card = (props) => {
  return (
    <div className="myCard">
      <div className="mycard-header">
        <img src={props.imgSrc} alt={props.imgAlt}></img>
      </div>
      <div className="card-box">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-content">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./overlayImg.scss";
import { Link } from "react-router-dom";

const OverlayImg = (props) => {
  return (
    <Link to={props.to}>
      <div className="overlay-container">
        <img className="overlay-img" src={props.overlayImg} />
        <div className="middle">
          <div className="overlay-text">{props.overlayContent}</div>
        </div>
      </div>
    </Link>
  );
};

export default OverlayImg;

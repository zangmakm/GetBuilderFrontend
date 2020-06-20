import React from "react";
import "./overlayImg.scss";

const OverlayImg = (props) => {
  return (
    <div className="overlay-container">
      <img className="overlay-img" src={props.overlayImg} />
      <div className="middle">
        <div className="overlay-text">{props.overlayContent}</div>
      </div>
    </div>
  );
};

export default OverlayImg;

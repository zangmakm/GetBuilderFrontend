import React from "react";
import { BsChevronRight } from "react-icons/bs";
import "./buttonLink.scss";

const ButtonLink = (props) => {
  return (
    <a className="btn-right" href={props.to}>
      &gt;
    </a>
  );
};

export default ButtonLink;

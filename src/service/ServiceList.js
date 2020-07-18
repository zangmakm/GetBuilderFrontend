import React from "react";
import serviceImg1 from "./assets/services/001-underfloor heating.png";
import serviceImg2 from "./assets/services/002-paint.png";
import serviceImg3 from "./assets/services/003-paint roller.png";
import serviceImg4 from "./assets/services/004-wallpaper.png";
import serviceImg5 from "./assets/services/005-toolbox.png";
import serviceImg6 from "./assets/services/006-toolbox.png";
import GridContainer from "../UI/GridContainer";
import OverlayImg from "../UI/OverlayCard/OverlayImg";

const services = [
  { id: 1, img: serviceImg1, content: "underfloor heating" },
  { id: 2, img: serviceImg2, content: "paint" },
  { id: 3, img: serviceImg3, content: "paint roller" },
  { id: 4, img: serviceImg4, content: "wallpaper" },
  { id: 5, img: serviceImg5, content: "toolbox" },
  { id: 6, img: serviceImg6, content: "toolbox" },
];

const ServiceList = () => {
  return (
    <div style={{ margin: "10% 0" }}>
      <h3 style={{ textAlign: "center" }}>All We Provide</h3>
      <GridContainer>
        {services.map((service) => (
          <OverlayImg
            key={service.id}
            overlayImg={service.img}
            overlayContent={service.content}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default ServiceList;
